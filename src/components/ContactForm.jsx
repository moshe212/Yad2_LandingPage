import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    dataType: "",
    phone: "",
    email: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // מציאת כתובת נכונה לשרת - בפיתוח מקומי או בהרוקו
      const baseUrl =
        process.env.NODE_ENV === "production"
          ? "" // בייצור זה יהיה באותו דומיין
          : window.location.origin; // בפיתוח מקומי

      // שליחת הנתונים לשרת
      const response = await fetch(`${baseUrl}/sendemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        alert("אירעה שגיאה בשליחת הפנייה. אנא נסה שוב מאוחר יותר.");
        setIsSubmitting(false);
        return;
      }

      // הצגת הודעת הצלחה
      setShowSuccess(true);

      // איפוס הטופס אחרי 2 שניות
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          businessName: "",
          dataType: "",
          phone: "",
          email: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error sending form:", error);
      alert("אירעה שגיאה בשליחת הפנייה. אנא נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (showSuccess) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md text-center" dir="rtl">
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl">המידע נשלח בהצלחה!</DialogTitle>
            <DialogDescription>
              תודה על פנייתך, ניצור איתך קשר בהקדם
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl">צור קשר</DialogTitle>
          <DialogDescription>
            אנא מלא את הפרטים הבאים ונחזור אליך בהקדם
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">שם פרטי</Label>
              <Input
                required
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">שם משפחה</Label>
              <Input
                required
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessName">שם בית עסק</Label>
            <Input
              required
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataType">דאטה נדרש</Label>
            <Select
              required
              value={formData.dataType}
              onValueChange={(value) =>
                handleChange({ target: { name: "dataType", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="בחר סוג דאטה" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">דירות להשכרה</SelectItem>
                <SelectItem value="sale">דירות למכירה</SelectItem>
                <SelectItem value="cars">מכוניות</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">טלפון</Label>
            <Input
              required
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              dir="ltr"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">דוא"ל</Label>
            <Input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              dir="ltr"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              ביטול
            </Button>
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שלח"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

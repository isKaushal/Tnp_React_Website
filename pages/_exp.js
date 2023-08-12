import Image from "next/image";

// components
import Input from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Section from "@/components/section";
import { useState } from "react";

export default function Exp() {
  const data = {
    user_name: "",
    institute_name: "",
    address: "",
    city: "",
    email_id: "",
    class: "",
    subject: "",
    chapter: "",
    purposed_date: "",
    contact: "",
  };

  const [getData, setGetData] = useState(data);
  console.log(getData);

  function GetValue(event) {
    setGetData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Layout>
      <div className=" bg-clrbglite flex justify-center items-center ">
        <Section className="flex justify-center items-center ">
          <div className="bg-clrbgcircle w-full h-[40rem] flex rounded-xl overflow-hidden">
            <div className="w-2/5 h-full bg-clryellow p-4">
              <div>
                <Image />
              </div>
            </div>
            <form className="rounded-xl p-8 w-3/5 ">
              <div className="flex">
                <Input
                  name="user_name"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.user_name}
                  placeholder="Name"
                  required
                />
                <Input
                  name="institute_name"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.institute_name}
                  placeholder="Institute Name"
                  required
                />
              </div>
              <div className="flex">
                <Input
                  name="address"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.address}
                  placeholder="Address"
                  required
                />
                <Input
                  name="city"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.city}
                  placeholder="City / State"
                  required
                />
              </div>
              <div className="flex">
                <Input
                  name="email_id"
                  type="email"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.email_id}
                  placeholder="Email Id"
                  required
                />
                <Input
                  name="class"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.class}
                  placeholder="Class"
                  required
                />
              </div>
              <div className="flex">
                <Input
                  name="subject"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.subject}
                  placeholder="Subject"
                  required
                />
                <Input
                  name="chapter"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.chapter}
                  placeholder="Chapter"
                  required
                />
              </div>
              <div className="flex">
                <Input
                  name="purposed_date"
                  type="date"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.purposed_date}
                  placeholder="Purposed Date"
                  required
                />
                <Input
                  name="contact"
                  type="number"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.contact}
                  placeholder="Contact No"
                  required
                />
              </div>
              <Button submit />
            </form>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

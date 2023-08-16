import Image from "next/image";

// components
import Input from "@/components/input";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Section from "@/components/section";
import ChacterAnimate from "@/components/textanimation";
import { useState } from "react";

export default function Exp() {
  const data = {
    first_name: "",
    last_name: "",
    institute_name: "",
    gender: "",
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
            <div className="w-2/5 h-full bg-clryellow p-4 overflow-hidden">
              <div className="p-5 h-full">
                <div className="flex relative justify-center items-center h-[50%]">
                  <div className="rounded-full overflow-hidden absolute ">
                    <Image
                      src="/images/getdemo/man.webp"
                      width={180}
                      height={180}
                      alt="profileimage"
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>
                  <div className="rounded-full overflow-hidden absolute ">
                    <Image
                      src="/images/getdemo/woman.webp"
                      width={180}
                      height={180}
                      alt="profileimage"
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>
                </div>
                <ChacterAnimate
                  value={getData.first_name}
                  size={35}
                  waight={600}
                  color="black"
                />
                <ChacterAnimate
                  value={getData.institute_name}
                  size={25}
                  waight={600}
                  color="black"
                />
                <ChacterAnimate value={getData.email_id} size={20} />
                <ChacterAnimate value={getData.contact} size={20} />
              </div>
            </div>
            <form className="rounded-xl p-8 w-3/5 ">
              <div className="flex">
                <Input
                  name="first_name"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.first_name}
                  placeholder="First Name"
                  required
                />
                <Input
                  name="last_name"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.last_name}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="flex">
                <Input
                  name="institute_name"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.institute_name}
                  placeholder="Institute Name"
                  required
                />
                <Input
                  name="gender"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.gender}
                  placeholder="Gender"
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
                  name="address"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.address}
                  placeholder="Address"
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
                  maxLength={10}
                  minLength={10}
                />
              </div>
              <div className="flex">
                <Input
                  name="city"
                  type="text"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.city}
                  placeholder="City / State"
                  required
                />
                <Input
                  name="purposed_date"
                  type="date"
                  className="p-4 m-2 rounded-md"
                  onChange={GetValue}
                  value={getData.purposed_date}
                  placeholder="Purposed Date"
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

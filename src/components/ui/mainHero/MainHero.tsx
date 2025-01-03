import React from "react";
import styles from "./mainhero.module.css";
import Header from "../header/Header";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";

function MainHero() {
  return (
    <section className={styles.main_hero_container}>
      <Header />
      <div className="absolute top-[194px] left-[50%] translate-x-[-50%]">
        <div
          className={`point w-[19px] h-[19px] rounded-full bg-purpleLight`}
        ></div>
        <div className="flex items-center gap-3 justify-center">
          <h2 className="font-semibold text-5xl">We Support</h2>
          <ImageComponent
            src="/svgs/bluearrow.svg"
            width="34px"
            height="34px"
            alt="support arrow"
          />
        </div>
        <h1 className="flex items-center font-semibold text-[102px] leading-[123px] gap-4 justify-center">
          gr
          <span
            className="w-[126px] h-[54px]  rounded-[26px] flex items-center justify-center mt-[25px]"
            style={{
              background:
                "linear-gradient(90deg, #C8C2E8 0%, #9E99F6 48.7%, #5B5FFC 100%)",
            }}
          >
            <span className="w-[99px] h-[32px] bg-white rounded-[26px] inline-block"></span>
          </span>
          wth
        </h1>
        <div className="font-semibold text-[46px] leading-[55.67px] flex items-end gap-3 justify-center  mt-[-10px] ms-28">
          <ImageComponent
            src="/svgs/circlearrow.svg"
            alt="circle arrow Image"
            width="38.59px"
            height="36.59px"
          />
          of your business
        </div>
        <p className="w-[730px] text-center font-medium text-grayLight text-[18px] leading-[26px] mt-4">
          We’re a marketing and software company with a speciality in direct to
          consumer and challenger brands: those that think differently, act
          differently and walk their talk.
        </p>
        <div
          className={`point_bottom w-[19px] h-[19px] rounded-full bg-yellowLight`}
        ></div>
      </div>
      <div className="absolute flex top-[600px] gap-[10px]">
        <div
          className="relative w-[275px] h-[201px] rounded-ss-[20px] rounded-se-[4px] rounded-ee-[21px] rounded-es-[23px] overflow-hidden"
          style={{
            backgroundImage:
              " linear-gradient(90deg, #8F5CE3 0%, #D9CAF4 55.89%, #E3DEF7 97.41%)",
          }}
        >
          <Image
            src="/svgs/mobile.svg"
            alt="mobile image"
            width={133}
            height={268}
            className="absolute right-0 top-16 scale-150"
          />
        </div>
        <div
          className="rounded-2xl w-[157px] h-[201px] px-4 py-6 flex flex-col justify-between"
          style={{
            background: "linear-gradient(90deg, #EDE7FF 0%, #F2EEFF 100%)",
          }}
        >
          <p className="text-xl text-linksColor leading-6 h-1/2  border-b border-b-linksColor">
            Digital Marketing
          </p>
          <p className="text-xl text-linksColor leading-6">
            Software Development
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainHero;

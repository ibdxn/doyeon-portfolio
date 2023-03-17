import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resume | 이도연</title>
      </Head>
      <div className="fixed top-0 left-0 right-0  h-2 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-200  "></div>
      <div className="  mx-auto tracking-tighter max-sm:w-4/5 sm:w-2/3 xl:w-2/4  2xl:w-[45rem] selection:bg-teal-300  ">
        <div className="">
          <h1 className="text-3xl mt-10 font-bold sm:text-[55px] sm:mt-20 lg:text-[80px] lg:mt-24">
            <p className="flex sm:mb-7 lg:mb-14">
              안녕하세요<span className="text-teal-500">.</span>
            </p>
            <p className="break-keep ">
              저는 이도연입니다<span className="text-teal-500">.</span>
            </p>
          </h1>
        </div>

        <p className="leading-normal break-keep mt-20 text-[32px] max-sm:mt-10 max-sm:text-[20px]  ">
          서울에서 웹 프론트엔드 엔지니어를 꿈꾸고 있으며 사용자에게 가까이
          맞닿아 있는 아름다운 인터페이스를 좋아합니다. 디테일을 중요하게
          생각합니다. 다양한 가치를 지닌 동료와 함께 뜻을 가지고 업무를 하는
          것을 희망합니다.
        </p>

        <div className="mt-24 mb-28 max-sm:mt-16 sm:mt-18">
          <h1 className="text-5xl font-bold max-sm:text-5xl ">
            <p className="">
              Project Experience<span className="text-teal-500">.</span>
            </p>
          </h1>
          <div className="flex mt-20 max-sm:flex-col sm:flex-col lg:flex-row max-sm:mt-14 border-b-2 pb-16">
            <div className="flex flex-col max-md:w-4/5 w-1/3">
              <span className="text-3xl font-bold max-sm:text-3xl sm:mb-5  break-keep  ">
                캐럿-마켓<br className=" max-md:hidden"></br> 프로젝트.
              </span>
              <span className="max-sm:text-sm max-sm:mt-2 sm:mb-5">
                2022. 12 - 2023. 02<br></br>(3개월)
              </span>
            </div>
            <div className="max-sm:mt-8">
              <span className="text-xl underline max-sm:text-base ">
                당근마켓 앱을 모델로 한<br></br>상품등록, 커뮤니티, 채팅,
                라이브스트림을<br className="lg:hidden sm:hidden"></br> 할 수
                있는
                <br className=" max-sm:hidden"></br> 서버리스 웹 서비스 개발
              </span>
              <h2 className="mt-14 text-2xl font-bold max-sm:mt-10 max-sm:text-xl sm:mb-5">
                Purpose.
              </h2>
              <span className="text-lg max-sm:text-base break-keep ">
                Serverless, NextJS, Typsescript 사용경험 및 숙련도 향상을 위해
                진행
              </span>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I do.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base break-keep ">
                  상품, 커뮤니티, 채팅, 라이브스트림, 프로필 페이지 프론트엔드
                  개발
                </li>
                <li className="text-lg max-sm:text-base  ">
                  DB 로직 및 전체 백엔드 개발
                </li>
              </ul>

              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                Skill.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base  ">
                  NextJS, Typescript, Prisma, PlanetScale, React,{" "}
                  <br className="max-sm:hidden"></br>
                  React-hooks
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I learn.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base break-keep ">
                  SSR과 CSR를 둘 다 사용 해봄으로 둘의 차이와 쓰임에 대해
                  학습하고 재고해 봄
                </li>
                <li className="text-lg  max-sm:text-base break-keep">
                  NextJS가 유저 사용에 대해 최적화가 상당히 잘 되어있음을 느낌
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                Ref.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base  ">포트폴리오 有</li>
                <li className="text-lg max-sm:text-base ">
                  Github 링크 :
                  <a
                    className="hover:text-teal-500"
                    href="https://github.com/ibdxn/carrot-market"
                  >
                    {" "}
                    https://github.com/ibdxn/carrot-market
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mt-20 max-sm:flex-col sm:flex-col lg:flex-row max-sm:mt-14 border-b-2 pb-16 ">
            <div className="flex flex-col max-md:w-4/5 w-1/3">
              <span className="text-3xl font-bold max-sm:text-3xl sm:mb-5 break-keep   ">
                코인 트래커.
              </span>

              <span className="max-sm:text-sm max-sm:mt-2 sm:mb-5">
                2022. 03<br></br>(일주일)
              </span>
            </div>
            <div className="max-sm:mt-8">
              <span className="text-xl underline max-sm:text-base ">
                사용자가 실시간으로<br></br>각 코인의 정보와 시각화 된 데이터를{" "}
                <br></br>볼 수 있는 웹 서비스 개발
              </span>
              <h2 className="mt-14 text-2xl font-bold max-sm:mt-10 max-sm:text-xl sm:mb-5">
                Purpose.
              </h2>
              <span className="text-lg max-sm:text-base">
                API와 라이브러리 이용 경험과 React 숙련도 향상
              </span>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I do.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base break-keep ">
                  각 코인의 순위, 설명, 시세변화 등을 차트 라이브러리로 시각화
                </li>
                <li className="text-lg max-sm:text-base break-keep  ">
                  Styled Components이용한 프론트엔드 개발
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                Skill.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base ">
                  Typescript, React Router, React Query, Apex Charts, Styled
                  Components
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I learn.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base break-keep">
                  React Query 사용 유무에 따라 데이터 fetching 코드 길이의
                  차이점을 느낌
                </li>
                <li className="text-lg  max-sm:text-base">
                  라이브러리 이용의 필요성과 간편성을 느낌
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                Ref.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base">
                  서비스 링크 :
                  <a
                    className="hover:text-teal-500"
                    href="https://ibdxn.github.io/react-masterclass"
                  >
                    {" "}
                    https://ibdxn.github.io/react-masterclass
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mt-20 max-sm:flex-col sm:flex-col lg:flex-row max-sm:mt-14 border-b-2 pb-16 ">
            <div className="flex flex-col max-md:w-4/5 w-1/3">
              <span className="text-3xl font-bold max-sm:text-3xl sm:mb-5 ">
                위튜브<br className="max-md:hidden"></br> 프로젝트.
              </span>

              <span className="max-sm:text-sm max-sm:mt-2 sm:mb-5">
                2022. 08 - 2022. 10<br></br>(3개월)
              </span>
            </div>
            <div className="max-sm:mt-8 ">
              <span className="text-xl underline max-sm:text-base">
                유튜브를 모델로 한<br></br>동영상 녹화, 업로드, 감상을 할 수
                있는
                <br></br>웹 서비스 개발
              </span>
              <h2 className="mt-14 text-2xl font-bold max-sm:mt-10 max-sm:text-xl sm:mb-5">
                Purpose.
              </h2>
              <span className="text-lg max-sm:text-base">
                Express를 사용한 서버 구축과 NodeJS 숙련도 향상 위해 진행
              </span>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I do.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base ">
                  Facebook / GitHub 소셜 로그인 구현
                </li>
                <li className="text-lg max-sm:text-base  ">
                  동영상 플레이어 기능 제작
                </li>
                <li className="text-lg max-sm:text-base break-keep ">
                  사용자가 캠으로 동영상을 녹화하고 업로드 할 수 있는 기능 개발
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold  max-sm:text-xl sm:mb-5">
                Skill.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base ">
                  NodeJS, Express, Pug, ES6, MongoDB, Mongoose, SCSS
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold max-sm:text-xl sm:mb-5">
                What did I learn.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base break-keep ">
                  각 HTML요소와 이벤트 리스너를 이용하며 기능의 유기적인 관계를
                  배움
                </li>
                <li className="text-lg max-sm:text-base break-keep ">
                  HTML, CSS, JS 를 활용한 기본적인 서비스 CRUD 빌드 경험을 느낌
                </li>
              </ul>
              <h2 className="mt-7 text-2xl font-bold  max-sm:text-xl sm:mb-5">
                Ref.
              </h2>
              <ul className="list-disc marker:text-teal-500">
                <li className="text-lg max-sm:text-base ">
                  Github 링크 : <br className="sm:hidden"></br>
                  <a
                    className="hover:text-teal-500"
                    href="https://github.com/ibdxn/wetube-project"
                  >
                    https://github.com/ibdxn/wetube-project
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 max-sm:mt-16 ">
            <span className="font-bold text-5xl max-sm:text-5xl ">
              <p className="">
                Skill Set<span className="text-teal-500">.</span>
              </p>
            </span>
            <div className="">
              <div className="flex mt-16 max-sm:mt-14  border-b-2 pb-10 ">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-3xl   ">
                    PL.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li className="">Typescript</li>
                    <li>ES6</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-16 max-sm:mt-14  border-b-2 pb-10 ">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-2xl   ">
                    Framework.<br></br>Library.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li>NextJS</li>
                    <li>React</li>
                    <li>React-hooks</li>
                    <li>Prisma</li>
                    <li>TailwindCSS</li>
                    <li>Express</li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-14  max-sm:mt-14 border-b-2 pb-10 ">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-3xl">
                    Server.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li>PlanetScale</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-14  max-sm:mt-14 border-b-2 pb-10 ">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-3xl">
                    DevOps.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-14  max-sm:mt-14 border-b-2 pb-10">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-3xl">
                    Env.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li>Mac</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-14 max-sm:mt-14 border-dashed border-b-2 pb-10 ">
                <div className="flex flex-col w-1/4 mr-10 max-sm:w-1/2 sm:w-1/2 lg:w-1/3 ">
                  <span className="text-3xl font-bold max-sm:text-3xl">
                    Etc.
                  </span>
                </div>
                <div>
                  <ul className="text-lg list-disc marker:text-teal-500">
                    <li>Cloudflare</li>
                    <li>Sengrid</li>
                    <li>Twilio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-20 max-sm:mt-16">
            <div className="mb-20">
              {" "}
              <span className="font-bold text-5xl max-sm:text-5xl ">
                <p className="">
                  Other Experiences<span className="text-teal-500">.</span>
                </p>
              </span>
            </div>

            <div className="flex flex-col max-sm:w-4/5 border-b-2 pb-10">
              <span className="mb-8 text-3xl font-bold max-sm:text-3xl break-keep ">
                한국폴리텍대학 대전캠퍼스.
              </span>
              <span className="max-sm:text-sm max-sm:mt-2">
                2019.03 - 2019. 11
              </span>
              <span className="text-lg">
                하이테크과정 스마트소프트웨어과 수료
              </span>
            </div>
            <div className="flex flex-col max-sm:w-4/5 border-b-2 border-dashed pb-10">
              <span className="mt-10 mb-8 text-3xl font-bold max-sm:text-3xl  ">
                금오공과대학교.
              </span>
              <span className="max-sm:text-sm max-sm:mt-2">
                2013.03 - 2018. 08
              </span>
              <span className="text-lg">경영학과 졸업</span>
            </div>
          </div>
          <div className="flex flex-col max-sm:w-4/5">
            <span className="mt-20 font-bold text-5xl max-sm:text-5xl ">
              <p className="flex">
                License<span className="text-teal-500">.</span>
              </p>
            </span>

            <span className="mt-10 text-3xl font-bold max-sm:text-3xl  ">
              정보처리산업기사.
            </span>
            <span>2019. 08. 16 취득</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

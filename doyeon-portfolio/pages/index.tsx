import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-1/3 mx-auto">
      <div className="">
        <h1 className=" font-bold text-8xl flex mt-20">
          안녕하세요.<br></br>
          저는 이도연입니다.
        </h1>
      </div>

      <div className="flex flex-col mt-40 text-xl space-y-12">
        <span>
          🐥 메인 언어 <b>Typescript</b> 로 프론트엔드 개발에 관심을 가지고 있는{" "}
          <b>주니어 개발자</b>
        </span>
        <span>
          🔮 팀 협업으로 함께 <b>아름답고 의미 있는</b> 프로젝트를 완성해 보고
          싶은 <b>협조적인 개발자</b>
        </span>
        <span>
          ✨ <b>세심하고 꼼꼼</b>한 성격으로 자그마한 기능과 버그도 지나치지
          않는 <b>섬세한 개발자</b>
        </span>
        <span>
          🦄 코드는 <b>최대한 짧고 간결함</b>을 추구하는 <b>심플 추구 개발자</b>
        </span>
      </div>

      <div className="mt-24 mb-28">
        <span className="font-bold text-5xl">Project Experience.</span>
        <div className="flex mt-20">
          <div className="flex flex-col w-1/4 ">
            <span className="text-3xl font-bold">
              캐럿-마켓<br></br>프로젝트
            </span>
            <span>
              2022. 12 - 2023. 02<br></br>(3개월)
            </span>
          </div>
          <div className="">
            <span className="text-xl underline">
              당근마켓 앱을 모델로 한<br></br>상품등록, 커뮤니티, 채팅,
              라이브스트림이 가능한<br></br>
              서버리스 웹 서비스 개발
            </span>
            <h2 className="mt-14 text-2xl font-bold">Purpose.</h2>
            <span className="text-lg">
              Serverless, NextJS, Typsescript 사용경험 및 숙련도 향상을 위해
              진행
            </span>
            <h2 className="mt-7 text-2xl font-bold">What did I do.</h2>
            <li className="text-lg ">
              상품, 커뮤니티, 채팅, 라이브스트림, 프로필 페이지 프론트엔드 개발
            </li>
            <li className="text-lg ">DB 로직 및 전체 백엔드 개발</li>
            <h2 className="mt-7 text-2xl font-bold">Skill.</h2>
            <li className="text-lg ">
              NextJS, Typescript, Prisma, PlanetScale, React, React-hooks
            </li>
            <h2 className="mt-7 text-2xl font-bold">What did I learn</h2>
            <li className="text-lg ">
              SSR과 CSR를 둘 다 사용 해봄으로 둘의 차이와 쓰임에 대해 학습하고
              재고해 봄
            </li>
            <li className="text-lg ">
              NextJS가 유저 사용에 대해 최적화가 상당히 잘 되어있음을 느낌
            </li>
            <h2 className="mt-7 text-2xl font-bold">Ref.</h2>
            <li className="text-lg ">포트폴리오 有</li>
            <li className="text-lg ">
              Github 링크 :{" "}
              <a href="https://github.com/ibdxn/carrot-market">
                https://github.com/ibdxn/carrot-market
              </a>
            </li>
          </div>
        </div>

        <div className="flex mt-20">
          <div className="flex flex-col  w-1/4 ">
            <span className="text-3xl font-bold">코인 트래커</span>

            <span>
              2022. 03<br></br>(일주일)
            </span>
          </div>
          <div className="">
            <span className="text-xl underline">
              사용자가 실시간으로<br></br>각 코인의 정보와 시각화 된 데이터를 볼
              수 있는
              <br></br>웹 서비스 개발
            </span>
            <h2 className="mt-14 text-2xl font-bold">Purpose.</h2>
            <span className="text-lg">
              API와 라이브러리 이용 경험과 React 숙련도 향상
            </span>
            <h2 className="mt-7 text-2xl font-bold">What did I do.</h2>
            <li className="text-lg ">
              각 코인의 순위, 설명, 시세변화 등을 차트 라이브러리로 시각화
            </li>
            <li className="text-lg ">
              Styled Components이용한 프론트엔드 개발
            </li>
            <h2 className="mt-7 text-2xl font-bold">Skill.</h2>
            <li className="text-lg ">
              Typescript, React Router, React Query, Apex Charts, Styled
              Components
            </li>
            <h2 className="mt-7 text-2xl font-bold">What did I learn</h2>
            <li className="text-lg ">
              React Query 사용 유무에 따라 데이터 fetching 코드 길이의 차이점을
              느낌
            </li>
            <li className="text-lg ">
              라이브러리 이용의 필요성과 간편성을 느낌
            </li>
            <h2 className="mt-7 text-2xl font-bold">Ref.</h2>
            <li className="text-lg ">
              서비스 링크:
              <a href="https://ibdxn.github.io/react-masterclass/">
                {" "}
                https://ibdxn.github.io/react-masterclass
              </a>
            </li>
          </div>
        </div>

        <div className="flex mt-20 ">
          <div className="flex flex-col  w-1/4">
            <span className="text-3xl font-bold">
              위튜브<br></br>프로젝트
            </span>

            <span>
              2022. 08 - 2022. 10<br></br>(3개월)
            </span>
          </div>
          <div className="">
            <span className="text-xl underline">
              유튜브를 모델로 한<br></br>동영상 녹화, 업로드, 감상이 가능한
              <br></br>웹 서비스 개발
            </span>
            <h2 className="mt-14 text-2xl font-bold">Purpose.</h2>
            <span className="text-lg">
              Express를 사용한 서버 구축과 NodeJS 숙련도 향상 위해 진행
            </span>
            <h2 className="mt-7 text-2xl font-bold">What did I do.</h2>
            <li className="text-lg ">Facebook / GitHub 소셜 로그인 구현</li>
            <li className="text-lg ">동영상 플레이어 기능 제작</li>
            <li className="text-lg ">
              사용자가 캠으로 동영상을 녹화하고 업로드 할 수 있는 기능 개발
            </li>
            <h2 className="mt-7 text-2xl font-bold">Skill.</h2>
            <li className="text-lg ">
              NodeJS, Express, Pug, ES6, MongoDB, Mongoose, SCSS
            </li>
            <h2 className="mt-7 text-2xl font-bold">What did I learn</h2>
            <li className="text-lg ">
              각 HTML요소와 이벤트 리스너를 이용하며 기능의 유기적인 관계를 배움
            </li>
            <li className="text-lg ">
              HTML, CSS, JS 를 활용한 기본적인 서비스 CRUD 빌드 경험을 느낌
            </li>
            <h2 className="mt-7 text-2xl font-bold">Ref.</h2>
            <li className="text-lg ">
              서비스 링크:
              <a href="https://github.com/ibdxn/wetube-project">
                https://github.com/ibdxn/wetube-project
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

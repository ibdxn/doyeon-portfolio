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
          <div className="flex flex-col">
            <span>
              캐럿-마켓<br></br>프로젝트
            </span>
            <span>
              2022. 12 - 2023. 02<br></br>(3개월)
            </span>
          </div>
          <div>
            <span>
              당근마켓 앱을 모델로 한 상품등록, 커뮤니티, 채팅, 라이브스트림이
              가능한 서버리스 웹 서비스 개발
            </span>
            <h2>Purpose.</h2>
            <span>
              Serverless, NextJS, Typsescript 사용경험 및 숙련도 향상을 위해
              진행{" "}
            </span>
            <h2>What did I do.</h2>
            <li>
              상품, 커뮤니티, 채팅, 라이브스트림, 프로필 페이지 프론트엔드 개발
            </li>
            <li>DB 로직 및 전체 백엔드 개발</li>
            <h2>Skill.</h2>
            <li>NextJS, Typescript, Prisma, PlanetScale, React, React-hooks</li>
            <h2>What did I learn</h2>
            <li>
              SSR과 CSR를 둘 다 사용 해봄으로 둘의 차이와 쓰임에 대해 학습하고
              재고해 봄
            </li>
            <li>
              NextJS가 유저 사용에 대해 최적화가 상당히 잘 되어있음을 느낌
            </li>
            <h2>Ref.</h2>
            <li>포트폴리오 有</li>
            <li>Github 링크 : https://github.com/ibdxn/carrot-market</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

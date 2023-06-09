import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="mx-auto w-4/5 sm:w-2/3 xl:w-2/4 2xl:w-[45rem] ">
      <div className="mt-14 font-bold text-7xl">résumé</div>
      <div className="mt-14 text-center border-b-2 pb-20 border-dashed">
        <span className="">
          <span className="text-2xl text-teal-500 ">export</span>
          <span className="font-bold text-3xl text-teal-500"> let</span>{" "}
          <span className="text-5xl font-bold ml-1 ">doyeonLee</span>{" "}
          <div className="mt-5">
            <span className="font-bold text-2xl mx-3">=</span>{" "}
            <span className="font-bold text-4xl text-teal-500">&#123;</span>
          </div>
        </span>
        <ul className="mt-9 text-lg space-y-7 break-keep leading-6 mb-9 text-center ">
          <li className="">
            <span className="">🐥</span> 메인 언어 Typescript로 프론트엔드
            개발에 관심을 가지고 있는 <b className="">주니어 개발자</b>
            <span className="font-bold">,</span>
          </li>
          <li>
            🔮 팀 협업으로 함께 아름답고 의미 있는 프로젝트를 완성해 보고 싶은
            <b> 협조적인 개발자</b>
            <span className="font-bold">,</span>
          </li>
          <li>
            ✨ 세심하고 꼼꼼한 성격으로 자그마한 기능과 버그도 지나치지 않는
            <b> 섬세한 개발자</b>
            <span className="font-bold ">,</span>
          </li>
          <li className="">
            🦄 코드는 최대한 짧고 간결함을 추구하는 <b>심플 추구 개발자</b>
          </li>
        </ul>
        <div className="font-bold text-4xl text-teal-500 ">&#125;</div>
      </div>

      <div className="mt-14 ">
        <div className="font-bold mb-10 ">
          <div className=" text-5xl mb-7">1</div>

          <div className="text-3xl">Interested Development Field</div>
        </div>
        <div className="">
          제가 관심 있는 분야는 프론트엔드 개발입니다. 프론트엔트 직무는 웹과
          앱이 발달함에 따라 사용자가 중요해지면서 웹의 핵심이며 비즈니스 가치를
          실현하는 데 있어 중요한 역할을 한다고 생각합니다. 여러 프로젝트를
          진행하며 빠른 화면을 불러오기 위한 고민을 하면서 화면을 불러오는
          방식인 CSR과 SSR에 대해 학습하였습니다. 둘의 차이에 대해 학습한 후
          적절한 곳에 적용해 보았습니다. 그리고 디스플레이 종류가 바뀌어도
          인터페이스가 유지될 수 있도록 반응형 웹에 대해서도 학습하였습니다. 또,
          이미지를 불러왔을 때 이미지 최적화는 어떻게 하는지, 에러가 났을 때
          화면 처리는 어떻게 할 것인지에 대해서도 고민했습니다. 이용하고자 하는
          서비스가 있을 때 바로 찾아서 이용 가능하도록 UI를 유기적으로 배치하는
          법 그리고 아름다운 인터페이스에 대한 고민은 사용자 중심 인터페이스 가
          잘 적용되어 있는 앱이나 웹이 업데이트되면 수시로 방문하며
          분석하였습니다.
        </div>
        <div className="font-bold mb-10 mt-14 ">
          <div className=" text-5xl mb-7">2</div>

          <div className="text-3xl">Why Choose Front-End Engineer?</div>
        </div>

        <div>
          웹과 앱을 많이 사용하게 되면서 여러 웹에서 불편함을 느꼈지만 사용자
          중심 인터페이스가 잘 갖춰진 웹에서는 편하게 서비스 이용을 할 수
          있었습니다. 특히 아름다운 인터페이스와 반응형 웹에 관심을 가졌습니다.
          관심을 가진 분야에서 사용자에게 편리함과 편안함을 주는 웹 인터페이스를
          구현해 보고 싶었고 대학교 졸업 후 한국폴리텍대학 스마트소프웨어과
          하이테크과정에 신청해 들어갔습니다. 팀 프로젝트를 완성하며 사용자
          입장을 고려한 인터페이스는 유저에게 신뢰감과 안정감을 주고 해당 웹에
          대한 호감도와 관심을 높여 준다는 것을 알게 되었습니다. 인상 깊었던
          디테일한 사용자 중심 요소를 가진 ‘당근마켓’이나 ‘유튜브’의
          프론트엔드를 구현해 보는 프로젝트를 했습니다. 개인이나 팀 프로젝트를
          넘어 비즈니스 가치가 있는 프로젝트를 구현하고 싶어서 프론트엔드 개발자
          직무를 선택하게 되었습니다.
        </div>
        <div className="font-bold mb-10 mt-14 ">
          <div className=" text-5xl mb-7">3</div>

          <div className="text-3xl">Memorable Development Project</div>
        </div>
        <div>
          ‘캐럿-마켓’ 프로젝트입니다. 프론트엔드에 대한 고민을 가장 많이 했기
          때문입니다. 사용자가 모바일에서도 편리하게 볼 수 있도록 모바일 화면
          사이즈로 제작했으며 로딩 화면을 보여주고 데이터를 보여줄 것인지 아니면
          데이터를 다 불러온 뒤 화면을 보여줄 것인지에 대한 고민부터 수정된
          데이터를 사용자가 빠르게 볼 수 있게 하는 방법 또한 고민하며
          제작하였습니다. 사용자 실수 방지를 위해 상품 업로드할 때 이미지 미리
          보기가 가능하게 하고 상품 좋아요를 누르면 아이콘에 바로 반영이 되게
          하였습니다. 사용자가 좀 더 필요한 정보들만 얻을 수 있도록 근처 위치
          게시물만 가져오게 하고 판단에 도움이 될 수 있도록 리뷰 기능도
          구현하였습니다. 사용자 입장에서 생각해 보는 프로젝트를 진행하며 사용자
          중심적 사고와 디테일적인 요소까지 경험해 볼 수 있었습니다.
        </div>

        <div className="font-bold mb-10 mt-14 ">
          <div className=" text-5xl mb-7">4</div>

          <div className="text-3xl">Character Strengths And Weaknessest</div>
        </div>
        <div>
          {" "}
          다수의 팀 프로젝트를 하면서 협동심이 높고 의사소통 능력이 우수하다는
          것을 알게 되었습니다. 문제 해결을 위해서는 의사소통이 잘 되어야 한다는
          생각이 많아 적극적으로 의사소통을 하였고 서로 다른 의견이 충돌할 때면
          최대한 양측 의견을 반영하여 조정을 하려 했습니다. 만약, 수용이 어려운
          의견일 경우에는 상대방의 논리를 마냥 반박하는 것이 아닌 상대방의
          의견도 존중해 주면서 상대방으로 하여금 맞는 판단을 할 수 있게끔
          도와주었습니다. 저는 팀원들과 업무를 처리할 때는 최대한 적극적으로
          의사소통을 하며 좋은 방향으로 이끌어가고자 합니다. 서로 도와가며
          조금이라도 도움이 되어야겠다는 협력적인 마음을 항상 가지고 있습니다.
          그래서 팀원들과 같이 하는 업무는 거의 모든 경우에 성공리에
          끝내왔습니다. 다소 자유로운 일 처리 방식으로 인해 한 가지 일에
          몰두하게 되었을 때 일을 모두 처리할 때까지 타 업무에 대한 효율이
          떨어진 적이 있었습니다. 하던 일을 먼저 마무리를 해야 그 업무에 대한
          정확한 처리가 가능하다고 생각하기 때문입니다. 하지만 일정을 효율적으로
          관리하면 동시에 여러 업무도 결과적으로 좋은 성과를 얻을 수 있다는 것을
          깨닫고 스케쥴러로 업무들을 관리하기 시작했습니다. 더불어, 업무에서
          오는 스트레스를 건강하게 받고 푸는 방법에 대하여 항상 고민하며, 그로
          인해 다양한 것에 항상 관심을 가지고 있습니다.
        </div>
      </div>
      <div className="mt-20 mb-24 font-bold text-3xl text-center">
        Thank You
      </div>
    </div>
  );
};

export default Home;

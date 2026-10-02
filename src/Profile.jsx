
export default function Profile({myData}) {
  return (
    <section>
        <img src={myData.imgsrc} alt={myData.imgalt} width={myData.imgwidth} height={myData.imgheight} />
        <h3>名前：{myData.name}</h3>
        <p>生年月日：{myData.birthday}</p>
        <p>趣味：{myData.hobbies.join("、")}</p>
        <p>特技：{myData.skills.join("、")}</p>
    </section>
  );
}
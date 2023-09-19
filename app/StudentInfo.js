import Link from "next/link";

export default function StudentInfo() {
  let name = "Abubaker Essadi";
  let courseSection = "CPRG 306 C";
  let github = "https://github.com/AEssadi91";
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Course section: {courseSection} </h2>
      <Link href={github}>Github Link</Link>
    </>
  );
}

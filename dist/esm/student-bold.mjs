export const name="student-bold";
export const id="dl_9f9465f70344968c60f6";
export const url=new URL("../icons/student-bold.svg?v=25beca57eccb1f9b5b823393900bd720cd9f9f065d6b497d57f2a6e54d938cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

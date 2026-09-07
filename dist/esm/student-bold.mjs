export const name="student-bold";
export const id="dl_df51e57833a34d7c9f8c";
export const url=new URL("../icons/S/student-bold.svg?v=25beca57eccb1f9b5b823393900bd720cd9f9f065d6b497d57f2a6e54d938cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

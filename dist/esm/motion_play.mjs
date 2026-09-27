export const name="motion_play";
export const id="dl_691ad7a0c737bb5b94e2";
export const url=new URL("../icons/motion_play.svg?v=bcced5cde598692342d012a715facb43d16c710ba5d781f8373041897acae855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

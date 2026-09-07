export const name="student-thin";
export const id="dl_e6876693cd0649c3871a";
export const url=new URL("../icons/S/student-thin.svg?v=b7cd6b828cbf2a90f802a23c2bacd620510ffd6b7897e501ccd2a6b55f6a655d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

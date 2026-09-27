export const name="arrow-elbow-left-down-thin";
export const id="dl_8d9f36c835f04716a2d2";
export const url=new URL("../icons/arrow-elbow-left-down-thin.svg?v=80795fb524c042b0662e831abdfaaa0398ef48024d92c9bf26411d41271ccc53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

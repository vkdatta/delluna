export const name="music-notes-plus-thin";
export const id="dl_15119490ebde4a93a1ba";
export const url=new URL("../icons/music-notes-plus-thin.svg?v=aea0f18c3a42001425dd8c0f25bab8ce64e418dd7ebd7b27566e0900dba828fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

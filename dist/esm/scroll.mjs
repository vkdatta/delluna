export const name="scroll";
export const id="dl_793e3511d5f2b7d2d487";
export const url=new URL("../icons/scroll.svg?v=946e2aa3d9851fa071270b46cbd48647e5d83ddbbfcacfa5f456f2ab96d29322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

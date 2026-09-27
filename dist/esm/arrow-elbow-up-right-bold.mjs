export const name="arrow-elbow-up-right-bold";
export const id="dl_b354424976e64e78b80b";
export const url=new URL("../icons/arrow-elbow-up-right-bold.svg?v=c0b2cf1a0706e00a01223aa89b4da9aa778c665e4e5f861f99934fd4fa7f1c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

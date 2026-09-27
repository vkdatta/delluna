export const name="clock-afternoon-bold";
export const id="dl_3fe6b3c445554f4c8298";
export const url=new URL("../icons/clock-afternoon-bold.svg?v=b28daa3481a11e1ed4768e1520fb144ded109a25df6597cf61f041d7674d00d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

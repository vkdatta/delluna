export const name="clock-clockwise";
export const id="dl_24f54bb7a2854dbfa5ac";
export const url=new URL("../icons/clock-clockwise.svg?v=cf2a3b4919d7be41ca22f80cb9695b2766927c7f53b8f176d2136b506c2e8622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

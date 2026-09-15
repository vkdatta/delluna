export const name="broadcast_on_personal-fill";
export const id="dl_f6204b16f60441aaa031";
export const url=new URL("../icons/B/broadcast_on_personal-fill.svg?v=8fe46f00f27b713b2b5106c2623ad71ad2736034f1b8b175eb12e71c68dc02e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

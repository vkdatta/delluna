export const name="distance";
export const id="dl_cbb3a88c92413230ea35";
export const url=new URL("../icons/distance.svg?v=8c8acdd64713341450dafe6a6535f1aeb272073d28294b58d53b33448bb1aaa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

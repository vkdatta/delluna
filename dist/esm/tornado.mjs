export const name="tornado";
export const id="dl_81e8dd2249604db399ff";
export const url=new URL("../icons/tornado.svg?v=52e4c02b2e4279f75991b4795439d1c190cd19f0096ce74ef79720a38375d970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

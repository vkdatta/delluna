export const name="humidity_indoor";
export const id="dl_a3e3678eac7ce253b545";
export const url=new URL("../icons/humidity_indoor.svg?v=8f16799b85251791d074721b721fb531b1132b7a684f247daf28852cbccc06bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

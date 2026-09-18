export const name="humidity_indoor";
export const id="dl_5728173156c34d219f06";
export const url=new URL("../icons/H/humidity_indoor.svg?v=8f16799b85251791d074721b721fb531b1132b7a684f247daf28852cbccc06bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

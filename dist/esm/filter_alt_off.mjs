export const name="filter_alt_off";
export const id="dl_4f849394f02dd897ff27";
export const url=new URL("../icons/filter_alt_off.svg?v=a0f905c3e91bf8cef24cf7be996e35d44d71c33784549f5d75bb90639d794d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

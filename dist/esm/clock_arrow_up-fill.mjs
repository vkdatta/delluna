export const name="clock_arrow_up-fill";
export const id="dl_abd1a7e368c98e1e8116";
export const url=new URL("../icons/clock_arrow_up-fill.svg?v=d5223f121d8c1bee00942b0f935142bc30fd9f574b1138b43c72e3b817383961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

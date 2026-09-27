export const name="gender-female-light";
export const id="dl_31af3578ac174b4db456";
export const url=new URL("../icons/gender-female-light.svg?v=07f9d3415fb93779da017c0b9c37a8fac0c75c0c5dcbf3acac6f02f653146548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

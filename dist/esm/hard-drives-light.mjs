export const name="hard-drives-light";
export const id="dl_395305c74cb741f4a80f";
export const url=new URL("../icons/hard-drives-light.svg?v=818439ad939f824e4569b0f44355502e3310cc24070d1e3a40e9e66e2573b65e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

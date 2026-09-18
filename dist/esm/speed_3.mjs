export const name="speed_3";
export const id="dl_fffa49d5dcbb485b96a0";
export const url=new URL("../icons/speed_3.svg?v=8f8d76b99fe31c9650d17072e8fa46f7922c546226f1a154398f9b354a2428c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

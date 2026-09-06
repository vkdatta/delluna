export const name="binary";
export const id="dl_2a26b7755a9043278eb0";
export const url=new URL("../icons/binary.svg?v=0f99fe206270b2b27a1d26fb70b9412346d3a1838914db01f00f79e39f6c7691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

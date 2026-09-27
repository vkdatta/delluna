export const name="foundation";
export const id="dl_5921070b62c08dc0bf84";
export const url=new URL("../icons/foundation.svg?v=d9f2868747f34d3bbe21cb28c93b94435a075b00456de8c1159b9a65d5b6891d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

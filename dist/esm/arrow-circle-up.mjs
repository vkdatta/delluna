export const name="arrow-circle-up";
export const id="dl_c12e5b3ed3f44690830a";
export const url=new URL("../icons/arrow-circle-up.svg?v=6f6897826807f01fb5314a8cf9e12a6150d097ec9b30db17b0a6747f8c3d7662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

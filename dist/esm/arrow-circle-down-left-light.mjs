export const name="arrow-circle-down-left-light";
export const id="dl_ebaea866737c40de943c";
export const url=new URL("../icons/arrow-circle-down-left-light.svg?v=45874e1008f509fe631e66c1057d57b4250ae640b2acbbb054e0a39d3371bfe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

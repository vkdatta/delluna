export const name="lucid_1-can-soda";
export const id="dl_3d3baf4b012f4c678697";
export const url=new URL("../icons/lucid_1-can-soda.svg?v=ae25c9c77492990b8c96b4201efff0851580786eda4c2ff55d6d85e7ae6ebcf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

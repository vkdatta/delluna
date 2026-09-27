export const name="rss-light";
export const id="dl_007191425c2a49b0ae6b";
export const url=new URL("../icons/rss-light.svg?v=013f2d8dc929662c398f1d798ebce41a131e1a9175ff46bbd6cc48a4a706cc71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

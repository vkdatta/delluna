export const name="5g-fill";
export const id="dl_1f9490b7741544d69fd6";
export const url=new URL("../icons/5g-fill.svg?v=cb4388802192666a05b5d8ab93bc7f8a4b57876b794dc365845dd301809a6d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

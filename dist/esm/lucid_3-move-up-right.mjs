export const name="lucid_3-move-up-right";
export const id="dl_4bc9bbb9faa64b39b61a";
export const url=new URL("../icons/lucid_3-move-up-right.svg?v=49bf40641db91bc92df60ed11b8006bf4d0795b0d3dc9ded74958ed24a180d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

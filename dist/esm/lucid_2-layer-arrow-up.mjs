export const name="lucid_2-layer-arrow-up";
export const id="dl_129cd195f0c140b8acd9";
export const url=new URL("../icons/lucid_2-layer-arrow-up.svg?v=f66d99772e5e9a23439e9f36b226d3ca951ea0e951b4795ed6b6fcd5d03bf369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="quick_reference-fill";
export const id="dl_ba7b53c143be5eff07b9";
export const url=new URL("../icons/quick_reference-fill.svg?v=71c99be60e05d68edd9f6223f3d45a21534de8a98b7f9e0dd91e01d888c2cdb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

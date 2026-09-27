export const name="responsive_layout-fill";
export const id="dl_90d79201066e23cacc9a";
export const url=new URL("../icons/responsive_layout-fill.svg?v=b250cbaa98c70040ba1c43393031e16be1b0df45a570a4e3a5e75ebe167832e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="swap_horizontal_circle-fill";
export const id="dl_415e9fb837232636c334";
export const url=new URL("../icons/swap_horizontal_circle-fill.svg?v=42f574e3bc2da8bda09055702825eeab33e9ac4ddc3b9f5a4cde739d89b8d2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hallway-fill";
export const id="dl_b45eb6e64155f6af91fc";
export const url=new URL("../icons/hallway-fill.svg?v=5d7abb4bcfce948e6a297c57d22e81b441b2590759bccb7d4589b8747e83743d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

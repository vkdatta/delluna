export const name="precision_manufacturing-fill";
export const id="dl_bc4b3243324eef417d14";
export const url=new URL("../icons/precision_manufacturing-fill.svg?v=3a3bdeed4d81197ac6aefce19753f290c04125ecd00575931191a7e5d37b8ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="link-simple-horizontal-break-fill";
export const id="dl_c646aa6c3713408387f4";
export const url=new URL("../icons/link-simple-horizontal-break-fill.svg?v=f40f8a6c2791dd8b4095a77d480206cf4d93ff3ef2840be6fb84dfff4d18f905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

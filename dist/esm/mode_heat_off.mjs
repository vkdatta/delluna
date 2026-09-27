export const name="mode_heat_off";
export const id="dl_bef166a889b89a47309c";
export const url=new URL("../icons/mode_heat_off.svg?v=5f7c5fab24120bcf074ed8646ec4ec1a889f87648a2f66f0ee811959b3ba3655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="battery-vertical-low-duotone";
export const id="dl_af131da63a0a44c2b0e4";
export const url=new URL("../icons/battery-vertical-low-duotone.svg?v=0c10fbbc1e587990adeb2b97944c9b2da1441bc80257da273095ac5db83baa24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

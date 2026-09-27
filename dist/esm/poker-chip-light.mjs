export const name="poker-chip-light";
export const id="dl_d7311141a0564f69ba0e";
export const url=new URL("../icons/poker-chip-light.svg?v=c3836f7bda714df91166923eb17020a93f251013af37c4676b1975e33fcd096d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

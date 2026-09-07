export const name="subway";
export const id="dl_f7ee50a09527445f8a64";
export const url=new URL("../icons/S/subway.svg?v=4ef9509a2a8d0b3472cdde0b481dec975fb5968ad24e6467c97290b73025558f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

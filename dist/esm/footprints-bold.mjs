export const name="footprints-bold";
export const id="dl_22afb1cf6a2d4a07b0b9";
export const url=new URL("../icons/footprints-bold.svg?v=bdb6a496aa38396f7f0846038abe9fb7579331537690a80859e351853aa6aec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

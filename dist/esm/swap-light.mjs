export const name="swap-light";
export const id="dl_0930a5befc7f6f1ae2af";
export const url=new URL("../icons/swap-light.svg?v=f928afed3b90c7e694bfcdf01b24844b2d2d4a965e960d8259cd916f9b3ea9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

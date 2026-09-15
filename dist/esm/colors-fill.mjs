export const name="colors-fill";
export const id="dl_b05391140edf40659823";
export const url=new URL("../icons/C/colors-fill.svg?v=0463f5906cd2963b5c61b1f4d7fc34cf15a8abec6dbda3a4e7418753a28da81e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

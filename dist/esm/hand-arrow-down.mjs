export const name="hand-arrow-down";
export const id="dl_d27b09f3a27d408f8f55";
export const url=new URL("../icons/hand-arrow-down.svg?v=f09a3c30cfec4f985cdfa104c495260f40408b8f24ead8d06a24a63d59f21cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

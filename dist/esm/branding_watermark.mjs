export const name="branding_watermark";
export const id="dl_44ea0d10424c45388d6f";
export const url=new URL("../icons/branding_watermark.svg?v=b208fef51dbdb1dd38f56b6240f995b7abe3e55fe3165c0fc4c03caa9b27776b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

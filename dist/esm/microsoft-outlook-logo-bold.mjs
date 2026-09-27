export const name="microsoft-outlook-logo-bold";
export const id="dl_57eb7a70bb9447548d21";
export const url=new URL("../icons/microsoft-outlook-logo-bold.svg?v=6c33626762966077310b79ab4dce7fdd1805ad96c3b06c4ad8a31a0689efb82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

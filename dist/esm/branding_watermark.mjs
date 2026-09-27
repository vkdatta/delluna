export const name="branding_watermark";
export const id="dl_f240f04bccd410584262";
export const url=new URL("../icons/branding_watermark.svg?v=59f80c86b8ba87721e8d07b5655e220da48691df5f88606624d50942be49e314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

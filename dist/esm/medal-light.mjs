export const name="medal-light";
export const id="dl_af4ebc554ff94dc2afc2";
export const url=new URL("../icons/medal-light.svg?v=3cddafa2a6f8e353152bf902f27b702b136df1fa0e51e980dd72522e54363804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

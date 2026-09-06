export const name="lucid_3-skip-forward";
export const id="dl_a0d5398b50804cddbd50";
export const url=new URL("../icons/lucid_3-skip-forward.svg?v=4c49b6381188897a78a9488ba719f3324e093bccb86e962d9a048a4dbdd2b667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

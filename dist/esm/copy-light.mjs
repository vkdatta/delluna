export const name="copy-light";
export const id="dl_f1f9dc940781430195f9";
export const url=new URL("../icons/copy-light.svg?v=5e36d6586275e86aa5e0057095878d8ce223f16602ad358022e26446ddc35015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

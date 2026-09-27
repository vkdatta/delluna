export const name="lucid_3-skip-forward";
export const id="dl_a0d5398b50804cddbd50";
export const url=new URL("../icons/lucid_3-skip-forward.svg?v=638d6b12426e3309bdc15d7418cee36d8ef6cb5358d50078d81172509f1e22de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

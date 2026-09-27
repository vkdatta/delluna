export const name="coda-logo";
export const id="dl_72094a64e1fe454386cf";
export const url=new URL("../icons/coda-logo.svg?v=55c82e271332f04e9bcf54a0b377cd8cb8869d3a643693279ac2ce7ace99868f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

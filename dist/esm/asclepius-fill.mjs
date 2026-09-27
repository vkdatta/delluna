export const name="asclepius-fill";
export const id="dl_413c10ca14ff411b88bc";
export const url=new URL("../icons/asclepius-fill.svg?v=51c568ffe3110476af863efb4844bc1adcf75ced89cc0c5132a3944c8b28861c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

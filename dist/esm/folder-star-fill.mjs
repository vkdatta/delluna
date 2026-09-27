export const name="folder-star-fill";
export const id="dl_fdca95f10a054bc28adc";
export const url=new URL("../icons/folder-star-fill.svg?v=a41983d323f180c134c620376440da53bdfb2e5902d59c87e5d84893178a6787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

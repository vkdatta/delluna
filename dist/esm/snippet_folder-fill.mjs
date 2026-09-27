export const name="snippet_folder-fill";
export const id="dl_9511e8157e2e72039d56";
export const url=new URL("../icons/snippet_folder-fill.svg?v=0bcf904697322c76ccf89fbf54cc13581677974fe2ac8cce36d2bcea4a997006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

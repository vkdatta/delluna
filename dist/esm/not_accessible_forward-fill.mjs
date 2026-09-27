export const name="not_accessible_forward-fill";
export const id="dl_ae4aedf504e97784c69d";
export const url=new URL("../icons/not_accessible_forward-fill.svg?v=a640cb7ac3982c0cc5978e7af73c849976d74afe81c05e9f6240d9a4770c4812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

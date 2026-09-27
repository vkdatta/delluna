export const name="genres";
export const id="dl_21edb184d82043df5fea";
export const url=new URL("../icons/genres.svg?v=417b0e8b858fa03484b6499f99bdf3cdbb488e9a0946f416c8aad5de74876001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

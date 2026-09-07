export const name="file-jsx-duotone";
export const id="dl_d47d75e32b244ea99bb4";
export const url=new URL("../icons/file-jsx-duotone.svg?v=8e1ed579203f91e88e033bda5794d02dadcd1c4bf23b368c8ed2301f202c1039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

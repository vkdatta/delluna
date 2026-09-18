export const name="texture_add-fill";
export const id="dl_0c93261e8ed44c12b137";
export const url=new URL("../icons/T/texture_add-fill.svg?v=9ba8fc0cf2078255cef78f9e4fca2c8b3d7c366019dfa6c8f7266ac45613d6b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

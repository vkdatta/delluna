export const name="person-fill";
export const id="dl_2ab8d66151786a88e7b8";
export const url=new URL("../icons/person-fill.svg?v=41b5834db70702fc02961556f58875dd67820a27308f0b4a97f985108eeda8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

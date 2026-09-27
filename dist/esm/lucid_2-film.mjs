export const name="lucid_2-film";
export const id="dl_be504034fc8642a28af5";
export const url=new URL("../icons/lucid_2-film.svg?v=27d4a005e3f311b092a58d1c83179aeddf68fcd19177541480eae1bffdbca221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

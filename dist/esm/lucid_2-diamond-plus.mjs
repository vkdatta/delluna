export const name="lucid_2-diamond-plus";
export const id="dl_199200eea9eb4c9fb42d";
export const url=new URL("../icons/lucid_2-diamond-plus.svg?v=7dbad0d53e605100157f7145d9b30652b611618ec51987419aa1c928bcea7d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="id_card-fill";
export const id="dl_40443421fe464fe8e47d";
export const url=new URL("../icons/id_card-fill.svg?v=87ee2447873112edff490b97261dfa425934134e22f112224e878727c4449a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

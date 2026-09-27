export const name="wheat-off";
export const id="dl_d76ff4ed5f584cbf86cf";
export const url=new URL("../icons/wheat-off.svg?v=2623d5baad49039243254a77270544c48e4b9469ae2ad185ffa4e8c2c4da1280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

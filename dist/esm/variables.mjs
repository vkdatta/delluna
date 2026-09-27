export const name="variables";
export const id="dl_84edabaec1d5239cb35d";
export const url=new URL("../icons/variables.svg?v=418117a13a421a5ac56ae28fee3fa28aa2ae57397a0948f3daaf0983328346bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

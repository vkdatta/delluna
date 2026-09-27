export const name="3d-fill";
export const id="dl_d2d05c27d38890ca532d";
export const url=new URL("../icons/3d-fill.svg?v=a8aa074f7dd27cb653c89123efc83f70cb8639b727c66f467e88b70f7a4c2cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="water_voc";
export const id="dl_f681f31c8f72d037e57c";
export const url=new URL("../icons/water_voc.svg?v=08cdb4cfa6f7e9b311341ecd0ce435055e4a59c8c45c625f244df9322cbb09f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

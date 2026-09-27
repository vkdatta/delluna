export const name="lock-simple-open-duotone";
export const id="dl_f15562f2ed3b4cf696dc";
export const url=new URL("../icons/lock-simple-open-duotone.svg?v=662e4e0d3985000f068098a9f52f81918faeae77528715e8b1600c245267463f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

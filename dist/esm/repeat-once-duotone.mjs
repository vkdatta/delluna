export const name="repeat-once-duotone";
export const id="dl_fc72e8cc258140268b03";
export const url=new URL("../icons/repeat-once-duotone.svg?v=976892eef734c6e14a38b6a7fc1565217a10f168394e08769fb5378f13f05d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

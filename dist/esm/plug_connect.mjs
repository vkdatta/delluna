export const name="plug_connect";
export const id="dl_d7095f07544a4c3fb109";
export const url=new URL("../icons/plug_connect.svg?v=0e30c8389baeca7491322e92471d0738d84ae3ad9cd84e716465faa78e7dbffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

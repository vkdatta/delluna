export const name="night_sight_max";
export const id="dl_b3964f494320bd5ef869";
export const url=new URL("../icons/night_sight_max.svg?v=0e5a1e2457328fecc3542c3987cda27a6b8985e50e4ab4bf83f13ade55ca4e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

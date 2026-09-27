export const name="lucid_3-network";
export const id="dl_295e7bab9bdd4c1e8e43";
export const url=new URL("../icons/lucid_3-network.svg?v=e34ab610214f2db12ec5ca32af5fd50c8df8d81f2a70e044a168305246175cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

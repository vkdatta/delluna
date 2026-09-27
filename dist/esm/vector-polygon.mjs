export const name="vector-polygon";
export const id="dl_9938956ba478471b8207";
export const url=new URL("../icons/vector-polygon.svg?v=6110e3547358b38d44e7ce0e9a0eef1231db7e4c90c503027b30c21b113262ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

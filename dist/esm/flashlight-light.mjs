export const name="flashlight-light";
export const id="dl_ac9d1383aaeb4098890d";
export const url=new URL("../icons/flashlight-light.svg?v=c73f7c9cc3e5059120dbcabcd21a40940b795cad50b3625bbf91efac217e257c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

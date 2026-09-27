export const name="coffee-light";
export const id="dl_9e013231c05941ba9a07";
export const url=new URL("../icons/coffee-light.svg?v=1fd4ed81c2226896f25652801087993d89bda83a8cf8006b8e3d33b3bd53f65d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

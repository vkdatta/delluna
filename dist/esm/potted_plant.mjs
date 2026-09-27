export const name="potted_plant";
export const id="dl_dd5c69f2dbf6b527f3ac";
export const url=new URL("../icons/potted_plant.svg?v=5d49a2793cb2881cccd56291388aeb65e09efd41f6d2e17894ec85b847700185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

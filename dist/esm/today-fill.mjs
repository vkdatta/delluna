export const name="today-fill";
export const id="dl_d41f3c9bdba656ba6f84";
export const url=new URL("../icons/today-fill.svg?v=4460b9ca4db7183db7071f91b1d08615c6a4dcec03a8cf847a2aac6802461dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

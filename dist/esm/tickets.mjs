export const name="tickets";
export const id="dl_e68a7f284eab4b0ca2db";
export const url=new URL("../icons/tickets.svg?v=9a5780e798da106b9c77439812e4b44f9ada99a1117842208690d379348c00ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

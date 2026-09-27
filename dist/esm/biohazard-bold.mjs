export const name="biohazard-bold";
export const id="dl_3bb60b1754604381ae5c";
export const url=new URL("../icons/biohazard-bold.svg?v=593938bc1954a020f1e538fdc0b4371f420bfbc5b84e0eff4fc78852afdaf20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

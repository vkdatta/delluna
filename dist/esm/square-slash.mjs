export const name="square-slash";
export const id="dl_fee9b8386172472092e7";
export const url=new URL("../icons/square-slash.svg?v=e8b8884a31542bac3311f01d27f30f3f412ec5ae27e5941f10bda337410a48ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

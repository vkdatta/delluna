export const name="sofa-fill";
export const id="dl_9a3550011c104640bda9";
export const url=new URL("../icons/C/sofa-fill.svg?v=45cea14c1591276d9f6657154f13f779f5a7545f84806b8fd66f4acc9f800b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

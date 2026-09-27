export const name="nest_found_savings-fill";
export const id="dl_03e68123b42b70acb644";
export const url=new URL("../icons/nest_found_savings-fill.svg?v=7f970dc65ea59368022d6850d81508a8de83a9f89227814a49d358237922e7ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="personal_bag";
export const id="dl_db07158c9bed45c78e1a";
export const url=new URL("../icons/P/personal_bag.svg?v=31c9b0433476e93d3f018efc10d7cb8cb2b82c6771564d8182d58dc7ef339b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

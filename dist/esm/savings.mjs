export const name="savings";
export const id="dl_96498d5c95a39e7548fd";
export const url=new URL("../icons/savings.svg?v=2db4fc061dc241bc26187fb041571fb95708af11b9436905de3f4404c044f34f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

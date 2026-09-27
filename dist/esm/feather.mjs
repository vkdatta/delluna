export const name="feather";
export const id="dl_33cc54a5ad1d45369eaf";
export const url=new URL("../icons/feather.svg?v=a9746b11a6cf40b13fcb8c11ac0072ffbd156d4187f4a16c73ed6f784dce863d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

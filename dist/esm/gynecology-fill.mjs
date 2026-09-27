export const name="gynecology-fill";
export const id="dl_5e2e310415ec6bd521d7";
export const url=new URL("../icons/gynecology-fill.svg?v=220deefeed4b62964755b4f6fefbca4763c812983aecc63a6d83491ae6742547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

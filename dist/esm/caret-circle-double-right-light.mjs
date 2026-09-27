export const name="caret-circle-double-right-light";
export const id="dl_b26a36e571b849649088";
export const url=new URL("../icons/caret-circle-double-right-light.svg?v=3728f59f60bd18247675091e520b3b4ded7d9dae9215fab3a661b4202da64e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

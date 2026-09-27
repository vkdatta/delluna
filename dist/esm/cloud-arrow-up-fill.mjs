export const name="cloud-arrow-up-fill";
export const id="dl_25d44fa7c9dd4a79bb0f";
export const url=new URL("../icons/cloud-arrow-up-fill.svg?v=adee2304f3484b4d77503dec64cfc72272551fe7beb64fd27c2e856b76fdc519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

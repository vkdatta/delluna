export const name="lucid_1-circle-small";
export const id="dl_8f7b0e1dd3784e47bbf1";
export const url=new URL("../icons/lucid_1-circle-small.svg?v=5e03b438cf2718eff029e5b0d6981d91e7877eb344dd7aa00066218c2b0f9827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

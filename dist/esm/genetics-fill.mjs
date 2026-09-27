export const name="genetics-fill";
export const id="dl_a69f1c733e125bad38bd";
export const url=new URL("../icons/genetics-fill.svg?v=473390b60337cbaf3bd36244d93cb3f1de1cddea5aa581f6f0788cd608760e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

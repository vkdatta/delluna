export const name="chef_hat-fill";
export const id="dl_e757551bf17d924d1c43";
export const url=new URL("../icons/chef_hat-fill.svg?v=128081d77e7268235fd639cd44058ffbc7e5cbea5e6524eba748e0ddb5bbd1b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

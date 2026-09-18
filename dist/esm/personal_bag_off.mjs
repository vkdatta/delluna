export const name="personal_bag_off";
export const id="dl_ac3503e4700c448da810";
export const url=new URL("../icons/personal_bag_off.svg?v=faabab9c22862590e083e3806afabceab6a7eee1a8a186c42b6b0d86dce1ea5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

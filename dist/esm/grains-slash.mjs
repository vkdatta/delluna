export const name="grains-slash";
export const id="dl_9bd5f59c149a4927a125";
export const url=new URL("../icons/grains-slash.svg?v=38849d40503187d97be0e4e1e4a7f3fe8b560b2569f88b3e46ea1ba4814c931f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

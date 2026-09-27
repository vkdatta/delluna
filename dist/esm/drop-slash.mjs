export const name="drop-slash";
export const id="dl_9697f5f089e5420b9239";
export const url=new URL("../icons/drop-slash.svg?v=b9dd9a9f7b12eb8bddb7b58189390d59064a6b724798f68866dc0341b2c33e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

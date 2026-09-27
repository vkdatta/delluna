export const name="sun-dim-bold";
export const id="dl_36be4502e248b9c87366";
export const url=new URL("../icons/sun-dim-bold.svg?v=fa78195fe6888c1707dec1d14a86bb3523b167f5d7c66c51512837e03ba40526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

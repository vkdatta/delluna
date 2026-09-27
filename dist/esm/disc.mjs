export const name="disc";
export const id="dl_74d94723aae64d23b837";
export const url=new URL("../icons/disc.svg?v=b1296fb49d0cdc2a474373a4930a42a2b74953092566bff7f015cd3a070c76c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

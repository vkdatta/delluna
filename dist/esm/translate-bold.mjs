export const name="translate-bold";
export const id="dl_ec6ee6da28d16f4d0e2c";
export const url=new URL("../icons/translate-bold.svg?v=06c6707ed378818a60a1327401649fd49e21af161f1d098ba2234a93dac77d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

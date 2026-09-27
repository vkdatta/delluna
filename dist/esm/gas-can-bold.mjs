export const name="gas-can-bold";
export const id="dl_92114730ff4b448e8193";
export const url=new URL("../icons/gas-can-bold.svg?v=9409744f84ad760acf155191cbd67fa8fd41e996322b880200c9641c6fd30b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="door-bold";
export const id="dl_349553dc27924f7da88b";
export const url=new URL("../icons/door-bold.svg?v=2096cdde0ae8747e3e0678e3d398e541288f0d7af882ae11cc0cfbfcca924a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

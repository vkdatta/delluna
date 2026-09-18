export const name="unsubscribe";
export const id="dl_24a69effc0194d038a4e";
export const url=new URL("../icons/U/unsubscribe.svg?v=494acefe2c0169a7af6210790c8c7d99a7de7522c861c64b6fa616951f3c1286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

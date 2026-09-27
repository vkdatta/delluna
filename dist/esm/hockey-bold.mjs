export const name="hockey-bold";
export const id="dl_e7ef5ec76a634dcf8b66";
export const url=new URL("../icons/hockey-bold.svg?v=b20e9009b902a1fc0088993da91bfd24f7ea18d11c0685e040adc02f75ff3810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

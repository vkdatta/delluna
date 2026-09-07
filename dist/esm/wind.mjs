export const name="wind";
export const id="dl_c283c1118a2645a5be75";
export const url=new URL("../icons/wind.svg?v=ba08c464cae1a3dd2600b1f247ebe7b36008dc8a1c002ca33682cb1ff36e30ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

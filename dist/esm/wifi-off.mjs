export const name="wifi-off";
export const id="dl_12da83f3c3df4d69ae2e";
export const url=new URL("../icons/wifi-off.svg?v=a006a328c1627dac0ea381f64616fa98784833657937db6161787d5af990ac62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

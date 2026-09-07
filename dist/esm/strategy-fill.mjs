export const name="strategy-fill";
export const id="dl_bebdcbba9b43413782d4";
export const url=new URL("../icons/S/strategy-fill.svg?v=4184e07159a4fa109f0b9e87f57fd2517167f0831cfac8ba6ecd64edf6d0cb85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

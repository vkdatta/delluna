export const name="arrows-out-light";
export const id="dl_1d2696decbff43cdacae";
export const url=new URL("../icons/arrows-out-light.svg?v=9c66173a5ece17bcbf4cf104ad5a60bcb20c66e7eadc04f57590739acf367d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

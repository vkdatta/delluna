export const name="arrows-out-simple";
export const id="dl_2ac59544800c497989c7";
export const url=new URL("../icons/arrows-out-simple.svg?v=4697ec3fa3ef2c66f4b7adc66c6d654afd7cf5866f06442265bea1e05208891c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

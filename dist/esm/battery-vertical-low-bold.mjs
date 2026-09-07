export const name="battery-vertical-low-bold";
export const id="dl_9685083bbeb641b594f0";
export const url=new URL("../icons/battery-vertical-low-bold.svg?v=1edc2e4e96e909126f98a2239171cee53faa71d85132cb27e4fe51ed2bb68643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

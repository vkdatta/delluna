export const name="car_mirror_heat";
export const id="dl_b09402b9cf23da827bb1";
export const url=new URL("../icons/car_mirror_heat.svg?v=97bb5c5467dcb1302194bc58917d067215fcc60c6c90601e16622a9645fc0ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

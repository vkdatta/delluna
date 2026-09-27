export const name="car_defrost_low_left-fill";
export const id="dl_147b1ab7b89395925550";
export const url=new URL("../icons/car_defrost_low_left-fill.svg?v=d7a84d72606a429b8d69a473a379fcefc0da45298e4a1c553234704e8e06cc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

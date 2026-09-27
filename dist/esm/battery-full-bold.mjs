export const name="battery-full-bold";
export const id="dl_736c9a16211e48e187d9";
export const url=new URL("../icons/battery-full-bold.svg?v=5808a65498eccef9536b1ca18810d5c19e985d276919f2c7add3ab2307a668ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

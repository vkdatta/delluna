export const name="travel-fill";
export const id="dl_b7608614703dac4db1e6";
export const url=new URL("../icons/travel-fill.svg?v=7b67533b7a6a04fba5e76dd806b37a20fba6179d1fd7eab0cff75cdc1d8fe5d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

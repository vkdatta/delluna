export const name="windmill-duotone";
export const id="dl_2a3bbbea4a725b886aa2";
export const url=new URL("../icons/windmill-duotone.svg?v=9c4beb622916ab41f4c31d5be628463852b87c1f64b5fe5d7c45d88ffabfe648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

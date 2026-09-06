export const name="building-office-bold";
export const id="dl_50eda555309d48218a47";
export const url=new URL("../icons/building-office-bold.svg?v=23ff06ac45670f6b008bc638f1ba19e4275fae7bf9544998847e282825c5e59a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="car-simple-bold";
export const id="dl_21e08d64f93043f39ef0";
export const url=new URL("../icons/car-simple-bold.svg?v=d384765079e6d8d31a8c7a62836794144fa0ffce2c2ee2e7e6fe1564ecba86b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="square-slash";
export const id="dl_fee9b8386172472092e7";
export const url=new URL("../icons/square-slash.svg?v=8748554073e034b7be611c11366e95ef931d73225613e53b1d2c7e2b7b9f6e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

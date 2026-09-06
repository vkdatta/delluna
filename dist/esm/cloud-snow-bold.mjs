export const name="cloud-snow-bold";
export const id="dl_d4fa6148964e47f0896e";
export const url=new URL("../icons/cloud-snow-bold.svg?v=8a55e7ed29c6f9e6c29863eaad27acc9beae5714daeb5e8ddb686eb105e93ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

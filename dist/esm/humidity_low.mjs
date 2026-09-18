export const name="humidity_low";
export const id="dl_3091887beb004a1584ba";
export const url=new URL("../icons/H/humidity_low.svg?v=376cc364b216369a8dfd8b461f7b9d42f0ae8efb7cac4fc483943b507f481ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

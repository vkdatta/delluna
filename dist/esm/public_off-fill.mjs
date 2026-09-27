export const name="public_off-fill";
export const id="dl_79cd7f9ba8da612d9b18";
export const url=new URL("../icons/public_off-fill.svg?v=4edec9661cdce27f89375302e880860e4b97ba76a1513c9926f2ed2173af3423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

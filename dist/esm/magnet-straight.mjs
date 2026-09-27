export const name="magnet-straight";
export const id="dl_c85c792fd3b642cfb3b3";
export const url=new URL("../icons/magnet-straight.svg?v=50bcd50f664de2063f72fefa2272753547d6193865ba2e7a1defc19291b2f46a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

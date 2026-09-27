export const name="humidity_percentage";
export const id="dl_0ed5fe3823fdd89ef7ef";
export const url=new URL("../icons/humidity_percentage.svg?v=45895cb89c443c39c12b9b9cd2851279926da526ff51f0e9d168c4ec52cdca87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

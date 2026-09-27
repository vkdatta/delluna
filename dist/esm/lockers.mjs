export const name="lockers";
export const id="dl_20e14bb5af0441b49890";
export const url=new URL("../icons/lockers.svg?v=ce6a3fb837941c9e7003c6a1e40b0e2dbfe2f675124da964602c745579dc7268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

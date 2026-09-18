export const name="respiratory_rate-fill";
export const id="dl_c0ea3648fbfb43c28d74";
export const url=new URL("../icons/respiratory_rate-fill.svg?v=8e67af02d3ca58c61389a26ea544dbaf28e2a11f7dd89d40fbc3710eb2223332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

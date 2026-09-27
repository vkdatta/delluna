export const name="flag_2";
export const id="dl_d7d17c5dbe627db39e28";
export const url=new URL("../icons/flag_2.svg?v=82ca0945a37bff0ff5336f9bd8ea578847bd3d7ffce1593cc370fa811a92d2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

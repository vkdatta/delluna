export const name="lucid_3-spell-check";
export const id="dl_ea6fec624314414d87c8";
export const url=new URL("../icons/lucid_3-spell-check.svg?v=731ba768873f3af6d604d4b9e62931d897ad245e975e47488341c2eb9d02b8cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

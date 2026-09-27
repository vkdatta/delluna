export const name="lucid_2-credit-card-x";
export const id="dl_e406894cf4b248658313";
export const url=new URL("../icons/lucid_2-credit-card-x.svg?v=7aa15d4a71750af04fdaaa1013a87192f4ecf1b52c806757cbf6c34d25f6c977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

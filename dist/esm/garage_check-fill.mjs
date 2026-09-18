export const name="garage_check-fill";
export const id="dl_ed076b6b14554b22ade0";
export const url=new URL("../icons/G/garage_check-fill.svg?v=c47c63c2729e68854824dd07244cb39d07628950b83d8b384c98ce3e1adf34ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

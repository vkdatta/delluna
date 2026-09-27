export const name="sunny_snowing-fill";
export const id="dl_033723b677c6b8a5c673";
export const url=new URL("../icons/sunny_snowing-fill.svg?v=0401d50bae991034bf5c4a29b73237feeee40bc9021591afab778a226f9378f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

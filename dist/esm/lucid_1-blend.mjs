export const name="lucid_1-blend";
export const id="dl_dd41c9fc6f6f4ccc8148";
export const url=new URL("../icons/lucid_1-blend.svg?v=9cad9cdf9dea3562fb968e43eb5f8684be1b5627a21711cddc635bd3ad5a9fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="17mp-fill";
export const id="dl_b0747ac45cb803386865";
export const url=new URL("../icons/17mp-fill.svg?v=4e2737e9bbf0702079a27cbccd05541df97d63e8b0d29de212853def5a97f917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

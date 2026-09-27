export const name="house-simple-fill";
export const id="dl_898991284aa24351b4b2";
export const url=new URL("../icons/house-simple-fill.svg?v=2972965cbbdc023a1961710c82733ad529afac910c149d7311a6b6f9ac0fbe61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

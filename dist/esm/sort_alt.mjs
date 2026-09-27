export const name="sort_alt";
export const id="dl_c16d3eaca9c2c0770728";
export const url=new URL("../icons/sort_alt.svg?v=17c37232d1d98c8cddd71bcd2188469e4e175f6e90f1f8f563a1f0567a519bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

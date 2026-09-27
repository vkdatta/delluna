export const name="bookmark_added-fill";
export const id="dl_80cca054d521c72d291e";
export const url=new URL("../icons/bookmark_added-fill.svg?v=9d75cbe7831de88abeaaaf9841feaf1e4410ec5f4ea0ff34572e30ef1ac0cbfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="8mp-fill";
export const id="dl_29d20b2ee07e4d1285e3";
export const url=new URL("../icons/8/8mp-fill.svg?v=e4360345e4b8bc8f690f15439f111e98b7b976888a386dd42fa023a644be5e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

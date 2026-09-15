export const name="fertile-fill";
export const id="dl_f6fafbabf635495d9f2f";
export const url=new URL("../icons/F/fertile-fill.svg?v=71c88a83882e8eae7327440989bd4904cb66c1c685f05eb4e2e0967576003df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

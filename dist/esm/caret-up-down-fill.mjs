export const name="caret-up-down-fill";
export const id="dl_2519c30663574c568ea2";
export const url=new URL("../icons/caret-up-down-fill.svg?v=8f99e01d03202cc8ba423dc2448731a23e7d9c64aecf39ddab00cdd01dfdbbb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

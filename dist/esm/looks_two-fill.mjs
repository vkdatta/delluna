export const name="looks_two-fill";
export const id="dl_3b33ce0ac7987380d109";
export const url=new URL("../icons/looks_two-fill.svg?v=a883d264054bc4b353d4bb370a7904277bc46d5f26cfc1a34b3e5142ea5d380a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

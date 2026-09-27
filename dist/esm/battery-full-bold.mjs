export const name="battery-full-bold";
export const id="dl_736c9a16211e48e187d9";
export const url=new URL("../icons/battery-full-bold.svg?v=7b30aaf027169168b61d28a621831c387175e3d3acfd9d7ce39dcdea56ab24d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

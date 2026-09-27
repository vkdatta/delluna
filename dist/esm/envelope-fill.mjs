export const name="envelope-fill";
export const id="dl_e574f8b8dfc24141bd00";
export const url=new URL("../icons/envelope-fill.svg?v=ebabcd5d5d8a270fa04b0bccf6aab6a48cef26d3286caa684a3f900799a4b9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lockers-fill";
export const id="dl_7d5735d972ef44a08519";
export const url=new URL("../icons/lockers-fill.svg?v=66e3db358dd4b6b0379f4b85f6c91532625e5caa16de4e0186ad2ceea12f1acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

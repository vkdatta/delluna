export const name="flag_circle";
export const id="dl_3a2f0bdf97b843e8a486";
export const url=new URL("../icons/F/flag_circle.svg?v=468dcb86652329bdfabcf17ceebce5126dbc7c9596193bbfddc72b662f0a31a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

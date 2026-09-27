export const name="person-simple";
export const id="dl_24f3653a08064038a789";
export const url=new URL("../icons/person-simple.svg?v=9ae6a97a5b670c9eea7a7f2f7a59f7286e6b7450bc5f1379e3150e5d3cc70924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

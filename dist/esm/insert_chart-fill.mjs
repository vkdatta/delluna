export const name="insert_chart-fill";
export const id="dl_b11576b6b141c36c2293";
export const url=new URL("../icons/insert_chart-fill.svg?v=48af23004e677f7a813652ac70a58ddc44795d8b9a7ea42e82e3e96f05b03079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

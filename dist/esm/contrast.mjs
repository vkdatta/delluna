export const name="contrast";
export const id="dl_54c5c631fe45227a8801";
export const url=new URL("../icons/contrast.svg?v=64899ae8d1262d8be41d14ef8f0c0fa94d489248657537115b33b74b58e78e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

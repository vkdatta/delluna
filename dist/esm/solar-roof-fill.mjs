export const name="solar-roof-fill";
export const id="dl_fe5c91fe7c76eced4ece";
export const url=new URL("../icons/solar-roof-fill.svg?v=f8bfbd73978723edb6c681e0a7b7bba19a0aa14a56d067a6afd62379323a5230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

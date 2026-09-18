export const name="unsubscribe-fill";
export const id="dl_0db8bc458fa746bca5cd";
export const url=new URL("../icons/unsubscribe-fill.svg?v=eadd1a8e4611553d3da18c13019c650b4725a0cc4b120b6b7a7168fa8b4cfe7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

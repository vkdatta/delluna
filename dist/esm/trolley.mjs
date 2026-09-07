export const name="trolley";
export const id="dl_af4f082afb8945e4bf70";
export const url=new URL("../icons/T/trolley.svg?v=6e3cc778b63b3f05e7fbd2e1cd9e4621b91b0e6032c4a859747988b089d1f118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

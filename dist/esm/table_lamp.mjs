export const name="table_lamp";
export const id="dl_53a1a78a604e4e2ba5aa";
export const url=new URL("../icons/T/table_lamp.svg?v=c57d5989334a12fc550314f659dea20f2415862061a423fdc4bc9ecc2a3e0a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

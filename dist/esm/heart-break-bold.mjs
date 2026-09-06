export const name="heart-break-bold";
export const id="dl_94b3c26baa5c421d9f8b";
export const url=new URL("../icons/heart-break-bold.svg?v=161bff8eedd3c1f73e64c0ab8e270fd46eadf077c79d14f7aa64d3dd9531ed84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

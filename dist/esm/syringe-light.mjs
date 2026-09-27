export const name="syringe-light";
export const id="dl_0da4bcda2d5558f5020a";
export const url=new URL("../icons/syringe-light.svg?v=891a16a4de8c832c09e9797d81aa4a6bf46b53d911506afb63e464d5d0c577a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

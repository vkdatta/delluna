export const name="cards-duotone";
export const id="dl_05afc6e139e246af8d14";
export const url=new URL("../icons/cards-duotone.svg?v=9240c73cbf36f16ae00b94feddab7466903c683af53c47f47124a503ee8194d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

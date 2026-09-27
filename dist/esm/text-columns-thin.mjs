export const name="text-columns-thin";
export const id="dl_557e74b20f9fca674918";
export const url=new URL("../icons/text-columns-thin.svg?v=9ad8dad7c74c517aea46a1668b485d2e313b1221c249f574c8ff2452631d373d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

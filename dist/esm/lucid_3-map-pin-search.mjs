export const name="lucid_3-map-pin-search";
export const id="dl_cbc6f09436e54304acad";
export const url=new URL("../icons/lucid_3-map-pin-search.svg?v=1c632b862be829f30e6e7882d6577db40e085816e6bbcafc5c391fc958a8d27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

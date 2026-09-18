export const name="local_laundry_service";
export const id="dl_4ddf5fb82b7e4abab99c";
export const url=new URL("../icons/L/local_laundry_service.svg?v=2b0467c2ce5753480b625bd2d75f4f387ee3eccc4319488f742af8d3de429dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

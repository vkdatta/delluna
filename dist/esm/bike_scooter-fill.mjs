export const name="bike_scooter-fill";
export const id="dl_3c18a2f587d5448bb404";
export const url=new URL("../icons/B/bike_scooter-fill.svg?v=a96dc45565669504753cbb9ebba8630b2bd1331ab2504b06cf951d66ef246b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

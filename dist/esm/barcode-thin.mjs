export const name="barcode-thin";
export const id="dl_d9c0459bba9b4ba7b6fb";
export const url=new URL("../icons/barcode-thin.svg?v=8a0350ee8ff4fe70dd38362166afd8fe1f4ad57cf6dec146265b026322cb3d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

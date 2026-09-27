export const name="nfc_off-fill";
export const id="dl_81f663b170183dc396a2";
export const url=new URL("../icons/nfc_off-fill.svg?v=a6cd6f0031328f89a6fcde6195f145c7cf45b003fe9b68530f0147bd9a753770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

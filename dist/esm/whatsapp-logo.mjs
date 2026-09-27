export const name="whatsapp-logo";
export const id="dl_d39346e870039e231a4d";
export const url=new URL("../icons/whatsapp-logo.svg?v=a4810350cd644528bea3c956961413bc29f8a0ed64ce1b7b3accd66197465b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

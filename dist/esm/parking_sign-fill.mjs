export const name="parking_sign-fill";
export const id="dl_123529cee05daddc14d0";
export const url=new URL("../icons/parking_sign-fill.svg?v=341ef6b87186b4118e7334267e3c3273fb49444fb753fcbb74a81d0d0ec690f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

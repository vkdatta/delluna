export const name="invoice-light";
export const id="dl_42a7bf4c1a3e4ebb920d";
export const url=new URL("../icons/invoice-light.svg?v=9034adddb3fe2d23d8ad63fb3a5da6c0058c7f3f2e357589e1c231c16a3d1669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

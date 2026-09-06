export const name="framer-logo-duotone";
export const id="dl_6f9b06ace4f442438573";
export const url=new URL("../icons/framer-logo-duotone.svg?v=e54257df115fae417b14b16d4d0bba12b3463aa2cea8edf729f54a18f69e7865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

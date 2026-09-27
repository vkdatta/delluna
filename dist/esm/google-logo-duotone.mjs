export const name="google-logo-duotone";
export const id="dl_c6953072ee884c919385";
export const url=new URL("../icons/google-logo-duotone.svg?v=c061ecfed30aa7b56d21fc1bbf3f686955158d7cdcda0c748645656c42bfd307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

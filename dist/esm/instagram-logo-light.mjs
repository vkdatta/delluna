export const name="instagram-logo-light";
export const id="dl_f5272735f3fb44528515";
export const url=new URL("../icons/instagram-logo-light.svg?v=e9acb9e6d9a3d99ecf78d20cdb6a227d6521d8b02505e35b959f5d89dff3d9be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

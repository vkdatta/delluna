export const name="facebook-logo";
export const id="dl_94a4a3ca5cad4cc1a5c1";
export const url=new URL("../icons/facebook-logo.svg?v=c20dcb87161eb2d79a6bb9726c995d895da6d0df54a3b17aaaa829800baef90f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

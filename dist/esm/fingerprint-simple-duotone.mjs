export const name="fingerprint-simple-duotone";
export const id="dl_55e44b9b50fb4ec99b3d";
export const url=new URL("../icons/fingerprint-simple-duotone.svg?v=36af02ae7809c6921fc103262d98e27f0eeec185134257ccc532a15e95886dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

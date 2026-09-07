export const name="x-logo-light";
export const id="dl_8736b6d7c69146c9a09c";
export const url=new URL("../icons/X/x-logo-light.svg?v=999d8d772433d4216fb89d45e129edb4e9d9f80c44695b0393358de2fa16a92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="sign-out-light";
export const id="dl_298225d4b98f39ae0c8c";
export const url=new URL("../icons/sign-out-light.svg?v=bc24c27ad75567f99ed28df94678d2fa57e27aeaa782a9701ba479ebf8681f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

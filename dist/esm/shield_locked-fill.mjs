export const name="shield_locked-fill";
export const id="dl_dd198b88382f7c94cf96";
export const url=new URL("../icons/shield_locked-fill.svg?v=73c0c947e2c6580a25597efd62c6a8aeabe7ef3a6e3af17ac84e1d76c58bfa38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

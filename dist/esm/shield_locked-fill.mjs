export const name="shield_locked-fill";
export const id="dl_0d79a51ad6d545c7bd6a";
export const url=new URL("../icons/S/shield_locked-fill.svg?v=73c0c947e2c6580a25597efd62c6a8aeabe7ef3a6e3af17ac84e1d76c58bfa38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

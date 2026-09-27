export const name="gender-transgender-thin";
export const id="dl_263364ad2f58466ca9de";
export const url=new URL("../icons/gender-transgender-thin.svg?v=bd908cb0bd5b4be05d95079e84c3638c91984f5708c8d22d40cb6acd5b6d1d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

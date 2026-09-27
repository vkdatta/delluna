export const name="gender-intersex-fill";
export const id="dl_ca64f4e7646e4326aadb";
export const url=new URL("../icons/gender-intersex-fill.svg?v=6a1d9fa5de37c121fccb24a4dd410d5df28969066c06c37b0d95f2f1ad42622e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

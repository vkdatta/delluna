export const name="check_circle-fill";
export const id="dl_461137612b32f657e780";
export const url=new URL("../icons/check_circle-fill.svg?v=0d7bb93336f353903848268544605d81e57a9a374b2f9f45f3e6746228c1906f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

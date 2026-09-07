export const name="sign-out-fill";
export const id="dl_12fd0efd588745b78525";
export const url=new URL("../icons/S/sign-out-fill.svg?v=2f2f2255d122c68badef3828451ac608c35b0a4b50a70242ca1a18029d44dd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

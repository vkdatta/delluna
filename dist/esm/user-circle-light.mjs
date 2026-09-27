export const name="user-circle-light";
export const id="dl_53fae4bdbc25f00930f0";
export const url=new URL("../icons/user-circle-light.svg?v=4b501fae43dc6b10f0508368c2e3225678074fe3bc083a5bfcfd634e38b5e267",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

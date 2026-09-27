export const name="sign_language_off-fill";
export const id="dl_3020bc930fa0d86ea2a5";
export const url=new URL("../icons/sign_language_off-fill.svg?v=f00d9d657c105f06f578d354398a935a465224d6e3395113af1b38fc5732152c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

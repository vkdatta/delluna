export const name="lucid_1-code-xml";
export const id="dl_7496080b2a4e44b19df0";
export const url=new URL("../icons/lucid_1-code-xml.svg?v=1d577112758102de63c64e3980239835103231f070b45efb722c0aa834010d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

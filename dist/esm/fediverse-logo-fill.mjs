export const name="fediverse-logo-fill";
export const id="dl_828d09c0423a4b7b8844";
export const url=new URL("../icons/fediverse-logo-fill.svg?v=f97931abb0e619adff93f8148c44e89ef08c5ec3aad3cdbb6653ae1a992642c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

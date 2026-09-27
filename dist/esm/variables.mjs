export const name="variables";
export const id="dl_c8603a3555fc2e0c17b0";
export const url=new URL("../icons/variables.svg?v=444219ee60f2a6974614d0dd4c7545dfc76dbd5b6aa783e3a378ca69b5768bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

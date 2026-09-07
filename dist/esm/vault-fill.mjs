export const name="vault-fill";
export const id="dl_87e9737d9ea148d39fa6";
export const url=new URL("../icons/V/vault-fill.svg?v=bfd3b9ee083baa0d87796f297d920dde795c02e21f70c4df01c13736f41446ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

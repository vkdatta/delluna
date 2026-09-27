export const name="at-duotone";
export const id="dl_00c700e5a4f445408f1a";
export const url=new URL("../icons/at-duotone.svg?v=5b7b8cd46ec13e71fd9bfd84858cdc67d2c02e6839876503808edaa232dc57f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mobile_charge";
export const id="dl_ab7af511a31cfc61f886";
export const url=new URL("../icons/mobile_charge.svg?v=af7203f326b64647d5b8870ec9d8fa03967adcfde9af2fbb13f3471e4d017621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="asterisk-simple-duotone";
export const id="dl_acb4a4219ec24217b5d2";
export const url=new URL("../icons/asterisk-simple-duotone.svg?v=ce60d27617250e5e3537534740c897023bac679aa4e66f0937e15992bde8f5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

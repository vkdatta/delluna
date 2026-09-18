export const name="touch_triple";
export const id="dl_aff3c62b00734fa48703";
export const url=new URL("../icons/T/touch_triple.svg?v=9a40784db97a99c6c06f5a07c783e6a3dc3b7851b5ff7c34ab48370ebb15e7a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

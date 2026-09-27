export const name="link_off-fill";
export const id="dl_a20ca383e70dc7b838e4";
export const url=new URL("../icons/link_off-fill.svg?v=82e605d7a5a542f46e02c75b039d5ec2c8281e664c7847cdcd034d9d1342a493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

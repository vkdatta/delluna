export const name="lucid_3-non-binary";
export const id="dl_23350ddb45c14382b4e6";
export const url=new URL("../icons/lucid_3-non-binary.svg?v=c4fbff476610456384db8d68a8d3bab1d53e8724e9829c4e9d4871052fc5bf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

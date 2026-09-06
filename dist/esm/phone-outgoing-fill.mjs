export const name="phone-outgoing-fill";
export const id="dl_c173ceb9a0884cf18c10";
export const url=new URL("../icons/phone-outgoing-fill.svg?v=0b510143c1cbc6fc59945976ae176ea0ca65b96a91c5ccd072dd5a47762fb502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="phone-transfer-thin";
export const id="dl_515f5ca072814bb1936c";
export const url=new URL("../icons/phone-transfer-thin.svg?v=a669244cd407886c1bad23dc82d00fd18b3987ad85fba50c07424298f4de2a36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mobiledata_arrows-fill";
export const id="dl_3adbd4e370690a608508";
export const url=new URL("../icons/mobiledata_arrows-fill.svg?v=b5ade58cd0d7680c0faa285ee8abfef9cf8a8415bace31db253ff0d4643179b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

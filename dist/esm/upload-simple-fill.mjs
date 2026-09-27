export const name="upload-simple-fill";
export const id="dl_c2bb93c135ca2279bc90";
export const url=new URL("../icons/upload-simple-fill.svg?v=cee081bbe64fb37628976c256c67ecf277025bde049047d9c83972db2153c536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

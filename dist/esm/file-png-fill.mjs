export const name="file-png-fill";
export const id="dl_1a913d16edbc40dfbdba";
export const url=new URL("../icons/file-png-fill.svg?v=6dee66484d20c246f1af21d16ec1c54107f251be81fc5fc2a7e040b41072fcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

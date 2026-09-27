export const name="mountains-thin";
export const id="dl_9c4dbef3511f46b491dd";
export const url=new URL("../icons/mountains-thin.svg?v=d1b4ae5352af6f9fcffaff2e6e5626b74522549eaf266c860195db67dc52a4b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

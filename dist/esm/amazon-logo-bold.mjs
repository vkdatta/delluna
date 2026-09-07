export const name="amazon-logo-bold";
export const id="dl_cd3d949dbc9044ae9266";
export const url=new URL("../icons/amazon-logo-bold.svg?v=406155210ffc8ff26ec499cc9cfab2f49f3f8d41967d4087c1fa02cd0d48679c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

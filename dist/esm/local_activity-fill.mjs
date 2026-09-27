export const name="local_activity-fill";
export const id="dl_f7a1e5bc5271fa735087";
export const url=new URL("../icons/local_activity-fill.svg?v=fcf8f884503bca1db888ee22ef581af8c47aecc0d46a66937c1b59b5dba3d336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

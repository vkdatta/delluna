export const name="eye-thin";
export const id="dl_8e06c018985a4e29a34d";
export const url=new URL("../icons/eye-thin.svg?v=bec945ce9de193294103ec10babc30b8708c240bb307bde5d02cca670b069f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

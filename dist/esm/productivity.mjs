export const name="productivity";
export const id="dl_22f07fe10f142a98cda1";
export const url=new URL("../icons/productivity.svg?v=78dd8d483c316fda51697d4010c7a9330ed9e2bf528df5bf1cfdaa697e1271f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

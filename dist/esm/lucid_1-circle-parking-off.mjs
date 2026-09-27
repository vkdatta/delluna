export const name="lucid_1-circle-parking-off";
export const id="dl_3b3d211ad8dd4b4dbb41";
export const url=new URL("../icons/lucid_1-circle-parking-off.svg?v=8dcd69fb66f1a08fa5ce52bff6541f75a70504741e1d8240f6cf880cea5f01b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

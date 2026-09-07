export const name="lucid_2-file-axis-3d";
export const id="dl_95c826c565dd4c4b91ba";
export const url=new URL("../icons/lucid_2-file-axis-3d.svg?v=f0efb5023e84119ee9d583e0dfc315612a1fe51faa97f0472b166d741eee00a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-scale";
export const id="dl_3e36b5ed8c5f4c83a1b6";
export const url=new URL("../icons/lucid_3-scale.svg?v=0e9ed83b9a1367f8d24fbd3caf53daedb80c3b39a7998326093fa5f75418ed86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

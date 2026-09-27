export const name="printer-duotone";
export const id="dl_3bed07147cca4c6b9d14";
export const url=new URL("../icons/printer-duotone.svg?v=e3e48756003401f1f175c8bf14f38dd456518927afe6eba617da87b5720f4177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

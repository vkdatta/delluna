export const name="lucid_3-scan-qr-code";
export const id="dl_9c8b604dae594dc68314";
export const url=new URL("../icons/lucid_3-scan-qr-code.svg?v=a5e34a5cd1ab3b6110745ad7a982f0ad8f0c61a0df6c12908ee0de5af976240c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

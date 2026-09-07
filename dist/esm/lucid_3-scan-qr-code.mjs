export const name="lucid_3-scan-qr-code";
export const id="dl_9c8b604dae594dc68314";
export const url=new URL("../icons/lucid_3-scan-qr-code.svg?v=5e8a8123aea796ab96300786a4d5c42ab2cf2e8aac8c965e565dc032597f59ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="device-mobile-slash-light";
export const id="dl_dd347a3a540c45509bc0";
export const url=new URL("../icons/device-mobile-slash-light.svg?v=62fe823a9908f6d5c56d45a35a9310744cfcadeef13292be9883cf34b6a72502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

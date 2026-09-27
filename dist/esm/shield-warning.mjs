export const name="shield-warning";
export const id="dl_8871513e616ad34ee75d";
export const url=new URL("../icons/shield-warning.svg?v=7b05d0778694db9c88763d74f5956bd34dd3a559314f4e791924f76261c332f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user-circle-dashed-thin";
export const id="dl_dadf3cf57a2d488897c5";
export const url=new URL("../icons/U/user-circle-dashed-thin.svg?v=9bc6efb114847369361315befc2ed71337f6f16b24d809c6241de20756d670d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

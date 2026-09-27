export const name="nut-thin";
export const id="dl_d843e75d37e147339743";
export const url=new URL("../icons/nut-thin.svg?v=af177e329ffd978cef87e7baf2458fd09741b9fb3cc27ea803c773d7e8f3cbba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

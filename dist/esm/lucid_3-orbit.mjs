export const name="lucid_3-orbit";
export const id="dl_f72e650b9c5f42169858";
export const url=new URL("../icons/lucid_3-orbit.svg?v=395d34a157cb473bcd7982f6b3e7c377cac57f5bb6526035ae5089a4fb7925a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

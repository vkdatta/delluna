export const name="monitor-fill";
export const id="dl_e88ea33368c849449386";
export const url=new URL("../icons/monitor-fill.svg?v=0261a47b5f08e4c58f657ddb0596b64e59cc397f93085aecd2e05d8220249c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

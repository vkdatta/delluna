export const name="monitor-fill";
export const id="dl_e88ea33368c849449386";
export const url=new URL("../icons/monitor-fill.svg?v=842f71a5268f6d550b8d596bd1b02d625fccb9101a83db021e05d030c7536631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

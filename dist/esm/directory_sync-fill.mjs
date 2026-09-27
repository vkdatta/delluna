export const name="directory_sync-fill";
export const id="dl_2938d46a49a31c596f2f";
export const url=new URL("../icons/directory_sync-fill.svg?v=bffa12817cf3648ce744f0442cd9609c190f979080e03c49ca7aed6faf423748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

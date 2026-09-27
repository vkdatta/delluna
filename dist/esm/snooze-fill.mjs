export const name="snooze-fill";
export const id="dl_8289c6f6403460b47cb5";
export const url=new URL("../icons/snooze-fill.svg?v=372b77fd9fa3fab2407eef2535305d574f8cc571099b5ec19cf0afdb2fb8b67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

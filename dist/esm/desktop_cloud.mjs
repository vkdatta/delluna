export const name="desktop_cloud";
export const id="dl_bd98993e628b8ace76e5";
export const url=new URL("../icons/desktop_cloud.svg?v=ff37b0680cd769d1e7e1bdcabf5035f7138c106382995a742ef35e040415bf11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

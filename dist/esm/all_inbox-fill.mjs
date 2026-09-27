export const name="all_inbox-fill";
export const id="dl_94369914167cbd733696";
export const url=new URL("../icons/all_inbox-fill.svg?v=c86f50a3dbaab81ec9063311ab620d1b346942212105538dca6ef9718cd5715d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

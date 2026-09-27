export const name="lucid_3-message-square-lock";
export const id="dl_880050a685504be9ba61";
export const url=new URL("../icons/lucid_3-message-square-lock.svg?v=ad8cbd9826584ed69e5ec4802aa21ce67be701542a3a447d92777ec797f2b471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

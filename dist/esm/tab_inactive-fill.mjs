export const name="tab_inactive-fill";
export const id="dl_2365ed800e6bc00e42ed";
export const url=new URL("../icons/tab_inactive-fill.svg?v=c7d7b52f2d587eee9b0879f93fcea35e9aaece057e8c13fd77dddb94fefc033b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

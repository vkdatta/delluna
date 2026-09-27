export const name="all_inbox";
export const id="dl_09c399ca93945c2054e2";
export const url=new URL("../icons/all_inbox.svg?v=bfed019b9c3f0cbe5e0306fee1bcea1df61776ff9b4e50a6b28f0510d393ad91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

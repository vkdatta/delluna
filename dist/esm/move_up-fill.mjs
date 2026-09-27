export const name="move_up-fill";
export const id="dl_4b72516474be8944cc36";
export const url=new URL("../icons/move_up-fill.svg?v=e41ce6c996040de8f6eea6191316a68a980c5685a6826be109681bb470bf5f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

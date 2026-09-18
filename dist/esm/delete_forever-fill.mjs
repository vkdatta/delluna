export const name="delete_forever-fill";
export const id="dl_9fe54272c2c34ef6a92b";
export const url=new URL("../icons/delete_forever-fill.svg?v=f1d59cd2d361e9fde0bb475cd91cf88d7559cee4c107af46b165c8da77fb7f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

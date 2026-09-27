export const name="brandy-fill";
export const id="dl_6aac5ae5042b4f5fbf4d";
export const url=new URL("../icons/brandy-fill.svg?v=5c44ad934551059fa972ac1edde3f4494daf444dd19bf116437dc7e75be8b6e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

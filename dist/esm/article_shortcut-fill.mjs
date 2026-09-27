export const name="article_shortcut-fill";
export const id="dl_c4aa50fb719908f80bf4";
export const url=new URL("../icons/article_shortcut-fill.svg?v=4392005374bb154bedc188cc94a232694d5bd91d7d155bfdfcc251350e7daa3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

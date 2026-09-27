export const name="article_shortcut-fill";
export const id="dl_9485b0cc4711458ee53b";
export const url=new URL("../icons/article_shortcut-fill.svg?v=5259a87661bf7949494aef046137d9a872bb68a985667c360560788acb3620b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

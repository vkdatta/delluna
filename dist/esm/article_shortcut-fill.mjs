export const name="article_shortcut-fill";
export const id="dl_c046bcc3cbb34e58af74";
export const url=new URL("../icons/article_shortcut-fill.svg?v=74bdfa876b2eea1117e1ca6c157346382cbcc92f49860fbb05c017c26de00b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

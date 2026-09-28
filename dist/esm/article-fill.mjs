export const name="article-fill";
export const id="dl_ccf76cfac1305af14f80";
export const url=new URL("../icons/article-fill.svg?v=9b9d1ee8426185a8f6608cd1ca65e705c08690b8087389f21ad5845ddacc788b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

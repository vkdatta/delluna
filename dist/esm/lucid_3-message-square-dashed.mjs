export const name="lucid_3-message-square-dashed";
export const id="dl_5e297379eb504086a722";
export const url=new URL("../icons/lucid_3-message-square-dashed.svg?v=2de4386581e664605d994c2f9621625d3ddbc810df6d02f89cd7e90335cdd2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

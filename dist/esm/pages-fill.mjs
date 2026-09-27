export const name="pages-fill";
export const id="dl_51c6ce4583bb0de47480";
export const url=new URL("../icons/pages-fill.svg?v=b00443cc5b1647d9860d9d424db6666b44e91e3101f1e251d78ef11d2469aa1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

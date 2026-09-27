export const name="caret-circle-double-left-bold";
export const id="dl_5893d34c9a914dfe9f19";
export const url=new URL("../icons/caret-circle-double-left-bold.svg?v=c31ede082a65b2f1f669b9759d66dfc97a135d56eb1918540b9a4b35786aa0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

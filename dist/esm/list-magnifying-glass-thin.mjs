export const name="list-magnifying-glass-thin";
export const id="dl_ddecdb94b6de482496f3";
export const url=new URL("../icons/list-magnifying-glass-thin.svg?v=07ce3941d2531204d30b882d3ec02b29c0f210b0dc7905e9229644d29e0aac07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

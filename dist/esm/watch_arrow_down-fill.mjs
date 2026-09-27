export const name="watch_arrow_down-fill";
export const id="dl_7d205450d0b6173027da";
export const url=new URL("../icons/watch_arrow_down-fill.svg?v=4dfcbf88952f58b19df1ffa80abc667c195a51cd6d1aec8be292192e3a45e1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

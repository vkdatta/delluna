export const name="article-thin";
export const id="dl_46ab3b8c966b46bfaae0";
export const url=new URL("../icons/article-thin.svg?v=47b6bdaff242508f4e9a999d2db57b13e60fb46ea0a3a7f39a399281898458a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

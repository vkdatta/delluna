export const name="watch_lock-fill";
export const id="dl_a17262a5f59418eaf904";
export const url=new URL("../icons/watch_lock-fill.svg?v=3697764dcc16d6bf2ebb3a9665dc24b9401a835c966d06b805fa0fcddfdd6d65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

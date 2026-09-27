export const name="drag_click";
export const id="dl_af391368d4d8ae3507d4";
export const url=new URL("../icons/drag_click.svg?v=a355f1ae14ff7e05c70ed329e2174ee173e0d6e4702e94f09347250d751ab894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

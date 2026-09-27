export const name="workflow";
export const id="dl_5f8a5bf2cabc4368a1df";
export const url=new URL("../icons/workflow.svg?v=e57a27cab2d1d03d34d2732f534f786387b7c284d8bacb8f6790330eb3c41092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="workflow";
export const id="dl_5f8a5bf2cabc4368a1df";
export const url=new URL("../icons/workflow.svg?v=1411caeeb165374b8b1b1c0cdb1f4b1cdd98d897a31e38b501303a1e3e55e3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

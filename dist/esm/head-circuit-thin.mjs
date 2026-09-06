export const name="head-circuit-thin";
export const id="dl_3ec487d86cd54fe18400";
export const url=new URL("../icons/head-circuit-thin.svg?v=8d7e93d3c2a325a2d1917259278be77b2d65940f32278a20653173e2863e916a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

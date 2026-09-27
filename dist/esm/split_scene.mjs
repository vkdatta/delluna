export const name="split_scene";
export const id="dl_0d988083c81ef920c5ff";
export const url=new URL("../icons/split_scene.svg?v=5c1021a631762937a7e0a71d2d79e63330dd646e8d53f393ad326d016ee0bbd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

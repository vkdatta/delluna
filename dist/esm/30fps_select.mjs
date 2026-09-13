export const name="30fps_select";
export const id="dl_82aaaaeb5b8a4c5a8ea0";
export const url=new URL("../icons/3/30fps_select.svg?v=1dc00c3ccbf55d3fb6b0df0e1fd1ba93c4f57405804ed00a04a551b25b54c092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

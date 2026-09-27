export const name="neurology-fill";
export const id="dl_1a43cb4cecef152727cc";
export const url=new URL("../icons/neurology-fill.svg?v=9f60cdc138f35e89dc4ba1bd3516062e7c1c634b922f26c8601cb280ac579ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

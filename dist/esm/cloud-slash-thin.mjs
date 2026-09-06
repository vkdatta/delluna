export const name="cloud-slash-thin";
export const id="dl_4035f17695134268bd40";
export const url=new URL("../icons/cloud-slash-thin.svg?v=0f336ce5c1b232209e1286700224ddf9d3d0f0790f6cbac58b1e912749325ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

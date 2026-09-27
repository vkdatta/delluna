export const name="view_stream-fill";
export const id="dl_82cc9e176470c4d25bd9";
export const url=new URL("../icons/view_stream-fill.svg?v=4e9df4fae706980d3e523359b94b0488c49f0c14a1236cd6322101d285902565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ping-pong-fill";
export const id="dl_5a9bbf8866254b4b96d6";
export const url=new URL("../icons/ping-pong-fill.svg?v=3959eb4322828787560040c668da3391b07c84e545065ed3da939ce98f7ee0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

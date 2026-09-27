export const name="call_end";
export const id="dl_dc66bdda63a7abe579da";
export const url=new URL("../icons/call_end.svg?v=e0a2af0104dc72caf1e141250869aa2a50416813cc7f4bf2488d5caf7d465d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

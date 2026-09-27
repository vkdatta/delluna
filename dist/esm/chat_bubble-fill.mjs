export const name="chat_bubble-fill";
export const id="dl_c947c9e46ae574e34b9f";
export const url=new URL("../icons/chat_bubble-fill.svg?v=2e243f0a2747a4ab97ded563389afa47ff084d07b301e49a74df80850687e36d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

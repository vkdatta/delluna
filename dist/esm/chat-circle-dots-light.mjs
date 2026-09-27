export const name="chat-circle-dots-light";
export const id="dl_d3955ff194b046d78bea";
export const url=new URL("../icons/chat-circle-dots-light.svg?v=4474a2771ec72d7c041336a5f6ee61bfb4aa64f7146f23c8512fa06b60af83ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ticket-minus";
export const id="dl_318fd31645f0491187f8";
export const url=new URL("../icons/ticket-minus.svg?v=8bee8c6b132e389d80650675d3b3298748df7e5ac8f2af0a8c8cf72ab1bc7af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

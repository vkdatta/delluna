export const name="stack-fill";
export const id="dl_4c027990f84d4f26a8fd";
export const url=new URL("../icons/S/stack-fill.svg?v=549d53f6eaf6a1da0d66be403180199f1578f0651506bfc137ae036b1fc2a60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

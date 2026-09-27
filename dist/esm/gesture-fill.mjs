export const name="gesture-fill";
export const id="dl_b96e04dba390b7abbf7a";
export const url=new URL("../icons/gesture-fill.svg?v=44a2b56d627ee96382524b095ee74324757a63b1dc95a98cc30de4f256c3e3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

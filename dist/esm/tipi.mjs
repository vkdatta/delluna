export const name="tipi";
export const id="dl_c204f2a984da10fd335b";
export const url=new URL("../icons/tipi.svg?v=388a5db4783dddd8441685d00642fe4cf14a2df6a7ba3b8869415a1f9ccefa39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="cell-signal-full-light";
export const id="dl_e34ae881cdce4a108fd1";
export const url=new URL("../icons/cell-signal-full-light.svg?v=8e3040f7b4bc6fd4136a2c9f32607b845053305946d3de4502dacdfca0030c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

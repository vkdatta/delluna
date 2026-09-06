export const name="lucid_3-move-up-right";
export const id="dl_4bc9bbb9faa64b39b61a";
export const url=new URL("../icons/lucid_3-move-up-right.svg?v=0b3cadcc71ba109841a44d0b0a64b00e3615fe07a43940b09c50998ae5bb325f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

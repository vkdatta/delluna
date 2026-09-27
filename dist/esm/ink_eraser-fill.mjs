export const name="ink_eraser-fill";
export const id="dl_351b6a9b27859bcd236a";
export const url=new URL("../icons/ink_eraser-fill.svg?v=7413a1e8f3eaa8a6d073780ce6a227ca1c4d23c5175037fb4a2b013f9c981b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

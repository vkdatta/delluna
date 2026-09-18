export const name="collections_bookmark-fill";
export const id="dl_6bd26ef103c54bcb823e";
export const url=new URL("../icons/collections_bookmark-fill.svg?v=920faa2353e66f18d436b34abd69856ded80ed603b4eaef3fe529888164cbf6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="stylus_pencil";
export const id="dl_3a2628e57ce0b5763617";
export const url=new URL("../icons/stylus_pencil.svg?v=61894b0a9be44801442e9e55661f6fe3082aea250378ade09a66275e3cb0dc25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="format_size-fill";
export const id="dl_cbbc322a8109465db4a2";
export const url=new URL("../icons/F/format_size-fill.svg?v=d36561671ea393c635b3d5807d2a362a98e50a0fc6b598af34f6dfa3c1e642ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

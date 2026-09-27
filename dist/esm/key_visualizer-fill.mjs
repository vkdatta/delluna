export const name="key_visualizer-fill";
export const id="dl_c7ba45e0dd8a6af66154";
export const url=new URL("../icons/key_visualizer-fill.svg?v=df0fa39135b54d882346be7369b8f2c8d0c4d0b3bc9732d99e557139fd47b6c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

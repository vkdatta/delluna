export const name="panorama_vertical";
export const id="dl_a2c0acff1481744cddf6";
export const url=new URL("../icons/panorama_vertical.svg?v=33fe8f16f17679de42e88cc8df6022b6381e59900050bb1667e162b710407e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

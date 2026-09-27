export const name="media_output_off";
export const id="dl_9d0a5fc46300ac914c28";
export const url=new URL("../icons/media_output_off.svg?v=37fe86a0d888755ccc7fcdb366c66719a251ff5b6397e2474bb0564cf073ce4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

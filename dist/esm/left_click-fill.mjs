export const name="left_click-fill";
export const id="dl_a05c683f44716df59447";
export const url=new URL("../icons/left_click-fill.svg?v=45e68d0c70e40b770b95ba370dc99ded503f0ac8cca37e83f7a6cab574a3a177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

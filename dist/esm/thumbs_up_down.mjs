export const name="thumbs_up_down";
export const id="dl_f69bf7b6a3d419cb14d2";
export const url=new URL("../icons/thumbs_up_down.svg?v=08df7de1960aed6e556368cfa8c94a98693a569af303ee3e0b9d555277458993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

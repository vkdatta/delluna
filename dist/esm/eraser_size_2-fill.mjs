export const name="eraser_size_2-fill";
export const id="dl_aa8f50360f25e7cd5080";
export const url=new URL("../icons/eraser_size_2-fill.svg?v=3477a82400ce41a75927d16136d63b19707ba8f269e171359a7199128b57676f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

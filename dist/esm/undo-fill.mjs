export const name="undo-fill";
export const id="dl_a34fbc1217e1b5b7aed8";
export const url=new URL("../icons/undo-fill.svg?v=6bb06fe7dc9381a6c5a5159a056d97ca14f73b050fe284099343ae2558b4e299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

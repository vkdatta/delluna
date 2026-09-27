export const name="selection-background-fill";
export const id="dl_22dfefff4d1a52bbd6d3";
export const url=new URL("../icons/selection-background-fill.svg?v=19fc5004761b0307ab0906af8042c27f052b22f18fc98a3b26904870b47f836a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

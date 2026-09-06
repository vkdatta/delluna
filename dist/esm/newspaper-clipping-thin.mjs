export const name="newspaper-clipping-thin";
export const id="dl_0ef3fb5ff0be4f1fbca5";
export const url=new URL("../icons/newspaper-clipping-thin.svg?v=edb377b5d3b3f5cd398ada9470f78a310e572cf5874fcf18c27fe1ef6e2c4594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

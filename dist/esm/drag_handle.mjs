export const name="drag_handle";
export const id="dl_31bcbbd2990e278f447d";
export const url=new URL("../icons/drag_handle.svg?v=cbe8cfdb14b4c760ff8c5a9078b52d782633319b568f9f86e27954530bfde1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

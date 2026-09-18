export const name="close-fill";
export const id="dl_9a816e4abfe84c3ca803";
export const url=new URL("../icons/close-fill.svg?v=d88c325b4459ccde7e44ae1043595acdc44ad7710c4089531c58a1cbc1a1670f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

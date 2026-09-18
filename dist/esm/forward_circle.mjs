export const name="forward_circle";
export const id="dl_722834baec9e4fadb7ef";
export const url=new URL("../icons/forward_circle.svg?v=3e0c32a39d82b6f1a218aaab9e8c43ae947e9eb315cc76ed1f1600a02bf6cca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

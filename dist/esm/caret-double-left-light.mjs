export const name="caret-double-left-light";
export const id="dl_6c0780d00ec246c7843d";
export const url=new URL("../icons/caret-double-left-light.svg?v=237fc0b885ec5c1ae7b04a7f3b1b04dbf7381ccddfd4de4049a815cbc510ebbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

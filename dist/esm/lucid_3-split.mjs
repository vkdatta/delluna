export const name="lucid_3-split";
export const id="dl_9ea6e36645f741d3a79e";
export const url=new URL("../icons/lucid_3-split.svg?v=b4994a838eeaa8558386282a12f188c72baa2be7b2596d031e41012855212568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

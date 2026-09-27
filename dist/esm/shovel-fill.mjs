export const name="shovel-fill";
export const id="dl_31621f8ec8fea91bd36e";
export const url=new URL("../icons/shovel-fill.svg?v=cf283571ce7a6cd51f41946e3ae50ecf2659189e1a631a1f95ae4c7e7f53ff31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

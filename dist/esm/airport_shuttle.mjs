export const name="airport_shuttle";
export const id="dl_cdcdad2dff4869f264a7";
export const url=new URL("../icons/airport_shuttle.svg?v=a2537f82353caf8b51b50a09b40f6d97f589605f0797c49c5f53a0a560fd752d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

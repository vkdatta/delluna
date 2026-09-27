export const name="church-fill";
export const id="dl_2b9572cc54f0b0759764";
export const url=new URL("../icons/church-fill.svg?v=7bdff58d6902c9c464bee5404893c692a83977b8fee26364ee90a2a29812e8b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

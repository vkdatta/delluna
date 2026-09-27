export const name="rewind-circle-fill";
export const id="dl_958c4a8b88ef4443ab61";
export const url=new URL("../icons/rewind-circle-fill.svg?v=96d8c91ac90ddd5ed36505f9257f014d3f5868d75c13231dcf779727f7395436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

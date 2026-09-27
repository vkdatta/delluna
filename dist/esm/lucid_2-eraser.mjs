export const name="lucid_2-eraser";
export const id="dl_61c57c16789845489ea9";
export const url=new URL("../icons/lucid_2-eraser.svg?v=53fc6d252cf065a4ed36eee787076f85e908dab00fc31763d95881801fcaa417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

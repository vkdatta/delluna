export const name="note-light";
export const id="dl_0d1ba2a34c564cf4a4b3";
export const url=new URL("../icons/note-light.svg?v=a63f1637145feeed5d1958cf3018ab7fff78963841389557f7022f9d558d779b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

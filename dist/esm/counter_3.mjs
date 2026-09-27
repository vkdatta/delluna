export const name="counter_3";
export const id="dl_d5a3de97c128ce21beaa";
export const url=new URL("../icons/counter_3.svg?v=44e63401fb9d454f5e124125ab118ab968458cac3f6672b0d4e44a243a43ec08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

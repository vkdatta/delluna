export const name="arrow-square-down";
export const id="dl_4863a3d92be740329c70";
export const url=new URL("../icons/arrow-square-down.svg?v=cfeccc8c10f28d48fe4ba9cfe8f1070f6fb84eaab5485d59f5177b02f07d6eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

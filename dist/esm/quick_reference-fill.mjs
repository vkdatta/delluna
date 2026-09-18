export const name="quick_reference-fill";
export const id="dl_83d6777338054bfe91d3";
export const url=new URL("../icons/quick_reference-fill.svg?v=7c54f51b90ab476832741d814800655628f52a7455ad561a607929806586fdd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

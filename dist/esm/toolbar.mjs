export const name="toolbar";
export const id="dl_d41fd48d3075dcbaa271";
export const url=new URL("../icons/toolbar.svg?v=c3539334d1f76058510083c0f2abf4d0a96c4e57b7b677c6a0db49baba30c711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

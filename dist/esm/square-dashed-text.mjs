export const name="square-dashed-text";
export const id="dl_582e9bdb113c40fea097";
export const url=new URL("../icons/square-dashed-text.svg?v=87af8e981fc8d2aa4394ee750b686417b88f240d8b08545d3778f4497457409a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rectangle-dashed-fill";
export const id="dl_292bb6d9b914476d88fc";
export const url=new URL("../icons/rectangle-dashed-fill.svg?v=e599275ce512cbd84c8668b75b747ccfe52351237971d3dc5fb7084778117109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

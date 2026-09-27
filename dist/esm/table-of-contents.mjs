export const name="table-of-contents";
export const id="dl_225e0e8df4b74f339430";
export const url=new URL("../icons/table-of-contents.svg?v=988ad431c33c1cf0563e735696c282cc79c5683fd6dad1514de7342ff4fbbf15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

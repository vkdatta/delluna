export const name="square-equal";
export const id="dl_84f69252e35e4826ac61";
export const url=new URL("../icons/square-equal.svg?v=a39bcf139bd92108ee12648ac17abd72fdbaa4cbe9de6d3e0edee0ee2a752dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

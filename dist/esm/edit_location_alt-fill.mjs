export const name="edit_location_alt-fill";
export const id="dl_be6cdd507e881eb6498a";
export const url=new URL("../icons/edit_location_alt-fill.svg?v=9dfaefbb8ba4d44edbcaee046139bfbafe5d3159c1029abd698c17fc9ad98c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

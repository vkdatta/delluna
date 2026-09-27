export const name="linked_services-fill";
export const id="dl_2eb38cf2214b5bd7de77";
export const url=new URL("../icons/linked_services-fill.svg?v=3f59ea8baf7274541e08b90da94058aff52cccc338b2fd420465a46b49f37e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

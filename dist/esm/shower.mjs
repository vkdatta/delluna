export const name="shower";
export const id="dl_b91d42f343a04bceb483";
export const url=new URL("../icons/S/shower.svg?v=945761a6736dc6b8014bebc460f98ce83ac73318d15e57619e807cc369768f14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

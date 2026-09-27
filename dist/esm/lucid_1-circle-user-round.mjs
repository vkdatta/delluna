export const name="lucid_1-circle-user-round";
export const id="dl_581158a55b3140f6a88f";
export const url=new URL("../icons/lucid_1-circle-user-round.svg?v=afe45260cbbaf9c5ab6ac264af5d9ea24ecd981f98ab5c494cfefae64303b691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

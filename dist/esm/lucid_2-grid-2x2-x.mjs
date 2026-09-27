export const name="lucid_2-grid-2x2-x";
export const id="dl_6c75ed3746f746a097ef";
export const url=new URL("../icons/lucid_2-grid-2x2-x.svg?v=8deb286a9765510854907506e2b832bf44392fcb905d9e8c1361f698733df2c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

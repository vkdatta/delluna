export const name="add_row_above";
export const id="dl_f6328b4a919e444fa6b2";
export const url=new URL("../icons/A/add_row_above.svg?v=1b4052f283fe89d5a13056920ab924723e843dc0863a04aa681914bfbd148c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

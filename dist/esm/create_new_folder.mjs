export const name="create_new_folder";
export const id="dl_8baca9648fb14da7a190";
export const url=new URL("../icons/create_new_folder.svg?v=94b2f3df449353a1dd712ea77edb87da812c8003b7ba46d12aadfaafe273230b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="add_a_photo-fill";
export const id="dl_565c3b95fd6c4f03ba46";
export const url=new URL("../icons/add_a_photo-fill.svg?v=1f0fef297383ee7b8dbded50b6f02ca0f8363e5c56de32fba2cc8d76c7d0b5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

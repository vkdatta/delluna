export const name="add_a_photo-fill";
export const id="dl_2a0a26eb1960199b549b";
export const url=new URL("../icons/add_a_photo-fill.svg?v=c82bb530059a0f226d7205527fc130341b242499ca18c662cfde46ebd11e052d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

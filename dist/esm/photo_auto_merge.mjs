export const name="photo_auto_merge";
export const id="dl_c276105399e71e8763dc";
export const url=new URL("../icons/photo_auto_merge.svg?v=cc024253260debe9fe6cfa397403bbf60b682774e50e3ebf9ede7f985fa8f771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

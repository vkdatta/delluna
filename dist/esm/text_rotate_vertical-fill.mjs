export const name="text_rotate_vertical-fill";
export const id="dl_45c4dcc9262d6ce25159";
export const url=new URL("../icons/text_rotate_vertical-fill.svg?v=d2aac706e4631bd0f017927b40cf99ea57a7badbc2a92d706b54b3e4344a9692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

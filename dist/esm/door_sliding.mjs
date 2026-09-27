export const name="door_sliding";
export const id="dl_7411e61b6bfc73698c13";
export const url=new URL("../icons/door_sliding.svg?v=36086ab81243d74a7bdb2942b13d86c9d1119fc4f805aed9fae3f6f5e5c32ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

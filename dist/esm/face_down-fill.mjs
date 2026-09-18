export const name="face_down-fill";
export const id="dl_d635150b809f42f8bb12";
export const url=new URL("../icons/face_down-fill.svg?v=41cef3c96052e47653ab41d1eb5378de3f26b9bcdc31aeb6b0a8952d65a55131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="face_up-fill";
export const id="dl_4785ae9303a89e5a1ee2";
export const url=new URL("../icons/face_up-fill.svg?v=b0305710ca455e54eee3b8c152ced68a17188e77ab5c65d0ccde47306ac1157f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

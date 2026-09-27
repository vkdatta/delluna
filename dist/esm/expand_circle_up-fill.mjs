export const name="expand_circle_up-fill";
export const id="dl_156a29163ceb947e3c3f";
export const url=new URL("../icons/expand_circle_up-fill.svg?v=40d1f23a8797f64604b26839d9854b695e944fbd89658b0f4fb022efdca2f34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

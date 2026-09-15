export const name="favorite-fill";
export const id="dl_35a5473d0dd04254a50b";
export const url=new URL("../icons/F/favorite-fill.svg?v=0425708db5c88ce3ddea672291cf78be4a7ff1f237abdd2cfaa1eea4ba38501b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

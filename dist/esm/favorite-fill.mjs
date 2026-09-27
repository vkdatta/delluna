export const name="favorite-fill";
export const id="dl_301bea36b083ca36b45d";
export const url=new URL("../icons/favorite-fill.svg?v=0425708db5c88ce3ddea672291cf78be4a7ff1f237abdd2cfaa1eea4ba38501b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

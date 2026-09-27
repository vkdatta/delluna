export const name="bento";
export const id="dl_ba33d0f5562d7b523321";
export const url=new URL("../icons/bento.svg?v=dc177df03c05cfd589bd6b1d18ebffa79a774b131d15ece7035db3188741c658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

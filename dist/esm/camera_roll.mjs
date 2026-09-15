export const name="camera_roll";
export const id="dl_ed95c813c87b4b4593b9";
export const url=new URL("../icons/C/camera_roll.svg?v=950c4828694bc042a28e7d2581acceb9a47b0d5ad988ee56ca8083f0eb2fd210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="thumbs_up_down-fill";
export const id="dl_bd248a3dff034b92943a";
export const url=new URL("../icons/T/thumbs_up_down-fill.svg?v=d47aae4dd08e7a3239dea50ed4b2ca974442b8d7bb833c0ae71b09eed3817053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

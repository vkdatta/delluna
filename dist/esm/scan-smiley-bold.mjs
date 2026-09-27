export const name="scan-smiley-bold";
export const id="dl_9026689640a01a1f0f1e";
export const url=new URL("../icons/scan-smiley-bold.svg?v=27c4056cee2c43e64793951ba9f8c7bdc5fcef3089bc3c27ba81779207ed8ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

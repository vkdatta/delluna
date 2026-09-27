export const name="lucid_2-glasses";
export const id="dl_046f7648b58c4bf69ba0";
export const url=new URL("../icons/lucid_2-glasses.svg?v=9924eec208a0aa263980cec69279db9f8f0b9e3ddecec098b96ba59a19f4376a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

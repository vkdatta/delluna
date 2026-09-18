export const name="fast_rewind-fill";
export const id="dl_50d72fb35b7c4668b06c";
export const url=new URL("../icons/fast_rewind-fill.svg?v=b0f739ea5a0c0628a50260dd485812403f48d560dcc90ede418c143e1c3d89c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

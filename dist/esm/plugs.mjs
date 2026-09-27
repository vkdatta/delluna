export const name="plugs";
export const id="dl_2403fe24f1a54e9cb22f";
export const url=new URL("../icons/plugs.svg?v=b40bc162a8c521432eccdca3b5338781914235ec1c384b6be3e7c3da0ba38a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

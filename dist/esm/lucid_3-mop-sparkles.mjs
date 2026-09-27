export const name="lucid_3-mop-sparkles";
export const id="dl_f85f787cc94b4be5a75e";
export const url=new URL("../icons/lucid_3-mop-sparkles.svg?v=729fbf41761dfdcb9cf9ccd507c6b81b733da6a1649b89faa3dde8f4008be694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

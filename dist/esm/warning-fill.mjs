export const name="warning-fill";
export const id="dl_b3d4a727a58d47ae5036";
export const url=new URL("../icons/warning-fill.svg?v=c5e46a0eb2844db0277c11604ac38fd44f0a96761f8c3e5fba160b607e9dcfcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

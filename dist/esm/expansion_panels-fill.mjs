export const name="expansion_panels-fill";
export const id="dl_3fc442341cdd16553661";
export const url=new URL("../icons/expansion_panels-fill.svg?v=418936efe77b4c8a7f58dd1e034db1ae3de1f62f6c55b00424e42c578a100a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="plugs-light";
export const id="dl_3829e40911184ab3b12a";
export const url=new URL("../icons/plugs-light.svg?v=f924cbaaa8fb9d1274c5137db445243d65051d1dd9cc7bb278efba8ddeb24a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

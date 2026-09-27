export const name="published_with_changes";
export const id="dl_278fa925ca67cb57659b";
export const url=new URL("../icons/published_with_changes.svg?v=5b00718df8884c280155eb6e2ade40e651dd45a51b048272d242e15cc06c1c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

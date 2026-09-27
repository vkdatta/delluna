export const name="center_focus_weak-fill";
export const id="dl_5d6139677ab6cb9bac93";
export const url=new URL("../icons/center_focus_weak-fill.svg?v=4c8c45190cff2d182df3995569b07bf954ef5dc3dacbb390a645d686efe127ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

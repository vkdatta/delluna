export const name="mode_of_travel-fill";
export const id="dl_9d1f622c135b4e6b9d99";
export const url=new URL("../icons/mode_of_travel-fill.svg?v=583b64f773594a68ff031168cce7d6b7a49f23b39e76a1ed737a2886cd2187bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

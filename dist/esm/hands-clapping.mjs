export const name="hands-clapping";
export const id="dl_9406634f99dc403a964d";
export const url=new URL("../icons/hands-clapping.svg?v=70b7a066877f8f546b1f10b45abf071e0281acc0aa06152cc52a7c039544bab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

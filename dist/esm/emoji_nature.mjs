export const name="emoji_nature";
export const id="dl_3056640924e736189a77";
export const url=new URL("../icons/emoji_nature.svg?v=aee408540a8559bb0b052c3ef4d594ac06f10f6b9861ae6d20d411605cdcf5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

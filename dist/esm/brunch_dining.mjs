export const name="brunch_dining";
export const id="dl_4d0cffa0ed558247ca51";
export const url=new URL("../icons/brunch_dining.svg?v=c33799cbfec704ab10f6b2a3cf18aa13434212f840dedb732d6a63334fb72312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

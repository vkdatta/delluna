export const name="user-gear-thin";
export const id="dl_8d3af7f5d4500ed79608";
export const url=new URL("../icons/user-gear-thin.svg?v=e34662da28605302998c2948690d309286b6315788e68f518f805ef8b99ea0d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

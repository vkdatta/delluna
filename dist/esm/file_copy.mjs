export const name="file_copy";
export const id="dl_5e12fba3b77f4ae5d7b2";
export const url=new URL("../icons/file_copy.svg?v=aa5dc504bbf92e8a0d3517beab798150d8dd0508f9ea31fb98d89c8cf3735967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

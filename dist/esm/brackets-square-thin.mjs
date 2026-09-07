export const name="brackets-square-thin";
export const id="dl_50db609bd3274c46874b";
export const url=new URL("../icons/brackets-square-thin.svg?v=102fa27b52b84f42dba49004c68bbd91f6536053cd3f4e9954a855b486eccafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

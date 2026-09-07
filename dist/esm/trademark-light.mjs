export const name="trademark-light";
export const id="dl_c3b42db098354770b221";
export const url=new URL("../icons/T/trademark-light.svg?v=5e7a816daa78ed235aa119196df65a16fed7168bbcb058c6a302e84e66c3c887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

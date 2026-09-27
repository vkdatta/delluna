export const name="tab_unselected-fill";
export const id="dl_50357710bbfb99be9604";
export const url=new URL("../icons/tab_unselected-fill.svg?v=d55f38437b5c4f9c5f508582c6a4be5144275c964bff5bc068b828d49e99c112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-image-off";
export const id="dl_387ec51e79c04a178b24";
export const url=new URL("../icons/lucid_2-image-off.svg?v=2e4634d7c52f1e08b8d9115da93ad31e079844a9232327467b03684a8cbfaa03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

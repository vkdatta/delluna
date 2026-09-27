export const name="chair_counter-fill";
export const id="dl_308c0db451ab2434740c";
export const url=new URL("../icons/chair_counter-fill.svg?v=faee3fd89282bb196224c05e1e5f37070470156484cd4a1299821413be44184c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

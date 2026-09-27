export const name="lucid_3-separator-vertical";
export const id="dl_4c51270fc801484f8702";
export const url=new URL("../icons/lucid_3-separator-vertical.svg?v=e3deef59da6cc1749b86fabbb5f8f6457f2215fd3b26f7420296d946d4336d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-chevron-left";
export const id="dl_119c47630100449f8401";
export const url=new URL("../icons/lucid_1-chevron-left.svg?v=e9982cbf31cad6949703cf3856dc56d62bdcf9706b3a0e87f29ca6b20d1d8566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

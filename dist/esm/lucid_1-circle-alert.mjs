export const name="lucid_1-circle-alert";
export const id="dl_01f6551a34d748c2bbdf";
export const url=new URL("../icons/lucid_1-circle-alert.svg?v=91feb03b4f1add25aeabb8e41f267870bd9b540c238390b1b5d86aec21d382fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

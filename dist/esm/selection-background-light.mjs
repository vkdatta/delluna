export const name="selection-background-light";
export const id="dl_192a3c15eca4d0fa018b";
export const url=new URL("../icons/selection-background-light.svg?v=ba7282872418b109e19a90de0451470e0df59a0b8aa679be748820d9ad4ebaab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

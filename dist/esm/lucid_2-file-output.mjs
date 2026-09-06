export const name="lucid_2-file-output";
export const id="dl_c6308cfab302497e87b0";
export const url=new URL("../icons/lucid_2-file-output.svg?v=f01e036b03226fcdb2837b55d1752a539a47638e4f58e9817cc1e098dc553a8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="computer_cancel-fill";
export const id="dl_5d41b9c52b4a75950b9c";
export const url=new URL("../icons/computer_cancel-fill.svg?v=6e43bf91d038de064b5dd9a6db2efed2620b0f58e40059f0a7437279b6463d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

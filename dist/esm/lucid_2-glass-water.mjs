export const name="lucid_2-glass-water";
export const id="dl_f4b4ebe939d74985b05e";
export const url=new URL("../icons/lucid_2-glass-water.svg?v=557219dd919ef3f4a7032b8ddbd0bc8d8467de54e0933d279f5acb0ac9e060a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

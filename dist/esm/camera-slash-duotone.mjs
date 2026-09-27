export const name="camera-slash-duotone";
export const id="dl_acac8b797e754aa3a5bd";
export const url=new URL("../icons/camera-slash-duotone.svg?v=801187a8e22e186bdb722e2af7937976ab9e86264d5d630cc9284cd4f2b73b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

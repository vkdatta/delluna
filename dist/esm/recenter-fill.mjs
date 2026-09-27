export const name="recenter-fill";
export const id="dl_6348365187a483fe97b8";
export const url=new URL("../icons/recenter-fill.svg?v=48825899655abeedddba31ea3eaba0d03b12a78590e83b0db50f23fceb203d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

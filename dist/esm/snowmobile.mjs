export const name="snowmobile";
export const id="dl_57ce783b7160660e9768";
export const url=new URL("../icons/snowmobile.svg?v=c24388e7b3fd1010fa063aee3057b7654a4f2db197d33848f4e82f75c7f83a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

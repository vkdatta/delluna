export const name="text-outdent-bold";
export const id="dl_cd3818b4adbf43f096a5";
export const url=new URL("../icons/T/text-outdent-bold.svg?v=42b6eae70788559e57978734d3dd091f0228e73885364aabeb4a648105c18c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

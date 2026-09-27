export const name="satellite-fill";
export const id="dl_20c294295821a801989c";
export const url=new URL("../icons/satellite-fill.svg?v=e3e921f704b886d9184dcf8001636b78471c9d5f83bcedfe328378d6250ce972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

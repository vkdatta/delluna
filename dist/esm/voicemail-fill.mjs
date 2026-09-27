export const name="voicemail-fill";
export const id="dl_f1783b31dd3fc21a2bf7";
export const url=new URL("../icons/voicemail-fill.svg?v=d3b1039c8d914228d4b738936c6b4c432d490111a63e183bac50aa65875d7910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

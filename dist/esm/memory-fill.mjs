export const name="memory-fill";
export const id="dl_67c75329c9fe38043d14";
export const url=new URL("../icons/memory-fill.svg?v=7986668b6a2cf8b59549607077a709dcb785d0dae113d399d14bc57011878215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

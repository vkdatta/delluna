export const name="clear_all-fill";
export const id="dl_dd8399bac273db4611c7";
export const url=new URL("../icons/clear_all-fill.svg?v=245433d7be4b3196ef1894c1391c723f1074155088e8a0a1f5c763743d101b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

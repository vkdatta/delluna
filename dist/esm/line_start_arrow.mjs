export const name="line_start_arrow";
export const id="dl_6e966c298560ca5d70b2";
export const url=new URL("../icons/line_start_arrow.svg?v=e55673d4be25ed02f6410145e993811d5ed4d9089cead9091cf1d89933d6a7ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

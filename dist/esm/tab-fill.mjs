export const name="tab-fill";
export const id="dl_f5bbfc7345dd54e9c108";
export const url=new URL("../icons/tab-fill.svg?v=b630cbe2ae07904badc8a50e1fca5d8da59bf5109a6db88fefc8599914a95de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

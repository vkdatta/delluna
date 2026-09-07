export const name="lucid_1-badge-check";
export const id="dl_5da655184fd24e8d973c";
export const url=new URL("../icons/lucid_1-badge-check.svg?v=c92dc7386ceb234402dc3c6aaf80b4a869edaa3a8345af5bb557dd00e060a93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

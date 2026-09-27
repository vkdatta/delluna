export const name="television-fill";
export const id="dl_656eee66898f5b0f14f7";
export const url=new URL("../icons/television-fill.svg?v=47da225e96c028e8d8fb02db79798082f8f2dfaad22dd9c2ad576f982f4a0de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

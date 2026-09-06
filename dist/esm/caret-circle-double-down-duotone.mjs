export const name="caret-circle-double-down-duotone";
export const id="dl_7ff24c8c5e3a47c49378";
export const url=new URL("../icons/caret-circle-double-down-duotone.svg?v=e8519dfbb283450f42e267f6e6db3f29d0a2fd63d98ffacb18c2449ec5da6252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

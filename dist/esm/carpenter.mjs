export const name="carpenter";
export const id="dl_a92c3e45a490a2b6a29e";
export const url=new URL("../icons/carpenter.svg?v=4544d09de6410d1d7bf7dc6d210cfdb3b187faf97ea150de3eb5be69d2d11c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-square-chevron-right";
export const id="dl_1fe0be603e064b628abc";
export const url=new URL("../icons/lucid_3-square-chevron-right.svg?v=90418a7dd556129ddc4f4434d2258d814fdc504f566f07bb5bc8be4365fa8104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

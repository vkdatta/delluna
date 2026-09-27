export const name="lucid_3-monitor-x";
export const id="dl_2910c8c94707479d9512";
export const url=new URL("../icons/lucid_3-monitor-x.svg?v=b21141750e2da5a166fb2531ffb5b322e5f6223199a470534c57799068662d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

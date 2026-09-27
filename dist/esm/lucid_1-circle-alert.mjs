export const name="lucid_1-circle-alert";
export const id="dl_01f6551a34d748c2bbdf";
export const url=new URL("../icons/lucid_1-circle-alert.svg?v=37ae542cbce2f15fd32702a03fc52cf2fa3e08f8c6e56a1e254494f7680b7659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

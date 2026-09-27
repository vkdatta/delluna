export const name="lucid_1-clipboard-copy";
export const id="dl_355154f1f66f49a09797";
export const url=new URL("../icons/lucid_1-clipboard-copy.svg?v=2419deea5b8f6e6a4cc5063e1e433e82f2bda14962c637312a068a4e861e9ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-layers-plus";
export const id="dl_0d0c8ce8f1114c1cba47";
export const url=new URL("../icons/lucid_2-layers-plus.svg?v=6ab9a61cbb976ba228d85c0fa25dabf67d66275dcc7d988afe8d7420858cba4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

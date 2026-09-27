export const name="lucid_2-footprints";
export const id="dl_77f6d1261e9048fa9284";
export const url=new URL("../icons/lucid_2-footprints.svg?v=6ad2be60a7f9ccaecbd231340b20d85f48f7b6536237f8397a1d0a1fc98c6be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

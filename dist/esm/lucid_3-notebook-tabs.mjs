export const name="lucid_3-notebook-tabs";
export const id="dl_a41e8e8ea625434c9973";
export const url=new URL("../icons/lucid_3-notebook-tabs.svg?v=6b1bc090c0fd7719ab9d125e2cfa50899d6e4989bedd5c62f196771f249e7594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="unite-fill";
export const id="dl_77a18ce6bef1f3472109";
export const url=new URL("../icons/unite-fill.svg?v=73c2c06e9c4777e7e16f0818d12ca08da4efc8ae0ef35008b2c722d9df3bd140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

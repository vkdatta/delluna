export const name="lucid_1-clock-arrow-down";
export const id="dl_b15fb9055f6141068f8c";
export const url=new URL("../icons/lucid_1-clock-arrow-down.svg?v=157fda3d52a487d4e9dfae48c54ffabd6985420925e00976db4c2c2c8204265b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

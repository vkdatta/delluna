export const name="lucid_3-power";
export const id="dl_4559f4e6212549589861";
export const url=new URL("../icons/lucid_3-power.svg?v=552035254e11399ae220071e7ed13d31419ef5e137eb6607f1e23060ad4110f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

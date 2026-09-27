export const name="lucid_1-badge-info";
export const id="dl_2d07ed5662b84c0fbb41";
export const url=new URL("../icons/lucid_1-badge-info.svg?v=8ab2f8bb3865d55e50baf917f41665a5b7de10e05e655d763db1c4dbd8cb27f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

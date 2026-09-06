export const name="lucid_1-badge-percent";
export const id="dl_8020aa52a30947cda08e";
export const url=new URL("../icons/lucid_1-badge-percent.svg?v=19585c14c936d63f4e3ebff8501178fe074fdf3e7a0ad9a21f95dd8775bc0441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

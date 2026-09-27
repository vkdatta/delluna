export const name="lucid_1-brush-cleaning";
export const id="dl_43752169de534b008bab";
export const url=new URL("../icons/lucid_1-brush-cleaning.svg?v=d3c8bc20114475ee868b55a416d1ed61f3d8e9adb4c1f8ad0c36943d575c232a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

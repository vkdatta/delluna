export const name="add_box-fill";
export const id="dl_ad9c45a32f644a3d978c";
export const url=new URL("../icons/add_box-fill.svg?v=279376193174993f76f544fb8821387f478393c3877322ca8059d17e3552bbec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

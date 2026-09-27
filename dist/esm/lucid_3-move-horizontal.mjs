export const name="lucid_3-move-horizontal";
export const id="dl_9879786fd3814a77b1f7";
export const url=new URL("../icons/lucid_3-move-horizontal.svg?v=e859664d0f1a70a74097f4126b03cff8d7a155b48b94167482cb66ed9e9edc6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-panel-right-dashed";
export const id="dl_fede5f249a6d42529fc8";
export const url=new URL("../icons/lucid_3-panel-right-dashed.svg?v=3fba60fd3b1c5af4e3d669f0851fbb5b4879c00fccd407bac64621dae6a463a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

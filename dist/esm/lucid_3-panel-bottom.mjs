export const name="lucid_3-panel-bottom";
export const id="dl_7e0e7e6eb75a454d8028";
export const url=new URL("../icons/lucid_3-panel-bottom.svg?v=21cb88cababfb9e5998f6adc4d1b1b071ee3fe61b62b128ebb66ae4d3d4218ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

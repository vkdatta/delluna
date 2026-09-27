export const name="lucid_3-panel-left-dashed";
export const id="dl_79e64147dab54fa1a2e8";
export const url=new URL("../icons/lucid_3-panel-left-dashed.svg?v=8994165530cc274525aacc105e52253b9a936e5b5aecc833b610cd329fbce9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

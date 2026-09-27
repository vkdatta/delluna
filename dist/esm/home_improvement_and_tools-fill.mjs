export const name="home_improvement_and_tools-fill";
export const id="dl_0eb531182239afe68b8e";
export const url=new URL("../icons/home_improvement_and_tools-fill.svg?v=aeabd4501bfa25267c32a44ff2f038539b4cac9a2cbb60cb94ff2be15f7e55f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

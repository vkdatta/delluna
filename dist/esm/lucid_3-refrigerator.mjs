export const name="lucid_3-refrigerator";
export const id="dl_87e4a63bb4a6401dbe08";
export const url=new URL("../icons/lucid_3-refrigerator.svg?v=8f7a1c5817a582260e8180eaeef8fec04d3afe784a59e97364e40132ee364989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

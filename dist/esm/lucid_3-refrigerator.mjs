export const name="lucid_3-refrigerator";
export const id="dl_87e4a63bb4a6401dbe08";
export const url=new URL("../icons/lucid_3-refrigerator.svg?v=fc9ec324e04d4485be7f882155e0c7d36fcf50cbb9b45c3bb80c8e342b23f655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

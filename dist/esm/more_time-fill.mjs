export const name="more_time-fill";
export const id="dl_69ee5171e98c1c3ce07a";
export const url=new URL("../icons/more_time-fill.svg?v=b156a1c73c6e5f43c7cea16a5211c1de110bbf717f050fe27cb819ae3a394ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

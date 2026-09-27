export const name="move_vertical_center";
export const id="dl_24509050d5009398e447";
export const url=new URL("../icons/move_vertical_center.svg?v=ffac0284ddb6de932e99741a7d351caffe73601b0964b9ff8c56aa335f4ca76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

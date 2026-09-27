export const name="bag-fill";
export const id="dl_8694513b97254a149be8";
export const url=new URL("../icons/bag-fill.svg?v=119b674ee8b17a891cb687d102aeca54b7ba59ee16dc49b76a7a7818f623b8b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

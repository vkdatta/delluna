export const name="square-split-horizontal-light";
export const id="dl_eea7ba816d534de8b153";
export const url=new URL("../icons/S/square-split-horizontal-light.svg?v=f301f1db4c9e923178e90ac69d8b0e1cbb845ef0337d78f82f939eabdeb2c480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

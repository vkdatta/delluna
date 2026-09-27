export const name="arrow_circle_right-fill";
export const id="dl_c39365dcb78c0a6c787b";
export const url=new URL("../icons/arrow_circle_right-fill.svg?v=dac88ee8ae4992b2f4b921b0bbb64438a8722c3c849f3ba198d5356e0073dfff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

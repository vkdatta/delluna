export const name="number-square-five-light";
export const id="dl_217db7cc93e446dea8a0";
export const url=new URL("../icons/number-square-five-light.svg?v=63a3cbc272c899468b9d2eb13838b125f83938d97451de5a928ae32453b43ca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

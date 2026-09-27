export const name="arrow-fat-line-right-fill";
export const id="dl_423e98cfb51f4192a0a2";
export const url=new URL("../icons/arrow-fat-line-right-fill.svg?v=532210df16e082675b02668bc2c279710fb17a96ebf57be894ab5b486ab59181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

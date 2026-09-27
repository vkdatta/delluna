export const name="arrow-square-down-right-bold";
export const id="dl_570894301d06477a930f";
export const url=new URL("../icons/arrow-square-down-right-bold.svg?v=42b6604fab0ad8c5141a89d51a078fb1382eb75d54267bfae4ef5b33ef44bd6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

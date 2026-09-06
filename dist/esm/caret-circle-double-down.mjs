export const name="caret-circle-double-down";
export const id="dl_f3170d045bd6469d96ba";
export const url=new URL("../icons/caret-circle-double-down.svg?v=e9838acfc5345161e3a817e947d8b9ebb63ecf7e516ff0b7ffe4a4a61139b3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

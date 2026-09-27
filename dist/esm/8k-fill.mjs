export const name="8k-fill";
export const id="dl_614277db15975d4224b2";
export const url=new URL("../icons/8k-fill.svg?v=e04c630cb991107aa4fef6e5669625305d2151602fb668d50d160dd482753956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

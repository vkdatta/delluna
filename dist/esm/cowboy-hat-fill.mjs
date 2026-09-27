export const name="cowboy-hat-fill";
export const id="dl_a3be563289814337a772";
export const url=new URL("../icons/cowboy-hat-fill.svg?v=2531a21737e5acfe98f439e3ccdd10524886759814bff104daf84a07e8b433d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

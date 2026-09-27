export const name="arrow-bend-left-down-duotone";
export const id="dl_2f5e7bf4566442fcb794";
export const url=new URL("../icons/arrow-bend-left-down-duotone.svg?v=c8ad76264208c466076a6ec09d9197f067a3e8e8925daa6d45784b0891a78a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

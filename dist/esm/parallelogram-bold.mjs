export const name="parallelogram-bold";
export const id="dl_91a5ee9d5b314e3096d8";
export const url=new URL("../icons/parallelogram-bold.svg?v=51c326e25967a66d478fada4666c6d1b75b4276be6f88ad49d0f2bc4b18de9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

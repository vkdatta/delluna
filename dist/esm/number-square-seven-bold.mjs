export const name="number-square-seven-bold";
export const id="dl_f63337f1b84945a39bc3";
export const url=new URL("../icons/number-square-seven-bold.svg?v=23a255fe87c21523aa6e2869e61c95f8f761622176b951e4343eba9c636fa194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

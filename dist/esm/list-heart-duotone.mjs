export const name="list-heart-duotone";
export const id="dl_8091256ea5d545bca344";
export const url=new URL("../icons/list-heart-duotone.svg?v=2640bd74bf03f5b4ce2cec1093ac63aee062960b38d514082ef065e7adc567d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

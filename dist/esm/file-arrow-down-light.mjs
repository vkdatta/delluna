export const name="file-arrow-down-light";
export const id="dl_3aa080f4807f4e35a6ae";
export const url=new URL("../icons/file-arrow-down-light.svg?v=ccefe1471d6704ae2cb3ef246e5d994395510b3609f650397693f9d9d0a273a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="file-ppt";
export const id="dl_39e1ff0474f84f069f4f";
export const url=new URL("../icons/file-ppt.svg?v=67d331d05e215751e21302392121f81da502751a98c517bd4fe41270f017c7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

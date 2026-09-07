export const name="globe-x-duotone";
export const id="dl_60fb909c5b084a48b1a7";
export const url=new URL("../icons/globe-x-duotone.svg?v=2240e9df5974149ca22436b0c9294679a646cc621415afbd03bcd57f01bf582c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

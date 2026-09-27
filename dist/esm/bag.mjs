export const name="bag";
export const id="dl_f3f4d227204e4c80970e";
export const url=new URL("../icons/bag.svg?v=25ec97aadfef6fde226d80d1f07d477ee0b4b1afe7fcf6e6d04140c60bccbd3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

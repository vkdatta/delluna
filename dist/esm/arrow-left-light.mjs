export const name="arrow-left-light";
export const id="dl_a92e48d4cf65420290e2";
export const url=new URL("../icons/arrow-left-light.svg?v=0edee49e8c39849c7d383f9cbbae15238d212adb38cc768903d357e849d7ea20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

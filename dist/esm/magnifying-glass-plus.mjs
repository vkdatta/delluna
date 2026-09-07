export const name="magnifying-glass-plus";
export const id="dl_e9cf2c2b96ef4e81990e";
export const url=new URL("../icons/magnifying-glass-plus.svg?v=c61e00fdb994983b59cab26905a7ed45342d7319115d29f50050e26d1f210cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

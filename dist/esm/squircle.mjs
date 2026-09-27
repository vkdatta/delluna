export const name="squircle";
export const id="dl_ff515c6eb5714c5abbd9";
export const url=new URL("../icons/squircle.svg?v=c65a2628ea13b902bd6dba2d5807f23edcf1310d8d99f65303cb4129de00f5c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

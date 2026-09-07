export const name="first-aid";
export const id="dl_e142d882f389476885f5";
export const url=new URL("../icons/first-aid.svg?v=a96afdc52d820f85d45cd799263c2faf2cbbe2931a447e3012b1b0b8036daf3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="smiley-fill";
export const id="dl_607224ee256023a7ad5e";
export const url=new URL("../icons/smiley-fill.svg?v=d55e594d6572a27aa6269776b817989272195df2e768e91331e4db0071317cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

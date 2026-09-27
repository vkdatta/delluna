export const name="body_fat-fill";
export const id="dl_46a48a7ad28d5ec35596";
export const url=new URL("../icons/body_fat-fill.svg?v=b98889f857dcfd2decdd36eb2b3caa573e664b8504d2f4ab11fef15a5d2700cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

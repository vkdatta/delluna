export const name="add_home-fill";
export const id="dl_fd80c3bc8938488f7321";
export const url=new URL("../icons/add_home-fill.svg?v=a533ed6c9c5fb4996feb3b95b397a261e7df034a7b00ec585370a89adbf2d5c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

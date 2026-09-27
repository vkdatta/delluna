export const name="bowl-food";
export const id="dl_492594dd49104bf9a0c5";
export const url=new URL("../icons/bowl-food.svg?v=26dd9ef2c1819b67b5927b08151dc55c151f465017073f86e597c267dc5f5b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

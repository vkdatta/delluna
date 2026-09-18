export const name="group_work-fill";
export const id="dl_82a27c2fec7a49359dc3";
export const url=new URL("../icons/G/group_work-fill.svg?v=f96208f8b2b7360c3bf934f2b2e623359e2c0fa1ec36d6a6bb2d7f65e7071499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

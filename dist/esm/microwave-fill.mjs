export const name="microwave-fill";
export const id="dl_a82f4e8c1f2a8c2a7299";
export const url=new URL("../icons/microwave-fill.svg?v=3969a2ba5905310bc743045518e37716a79c7c2f6ed1e34fdf775bf8995e679c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

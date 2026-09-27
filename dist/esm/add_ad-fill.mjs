export const name="add_ad-fill";
export const id="dl_551230ea34315d6270a6";
export const url=new URL("../icons/add_ad-fill.svg?v=dae146b65fd078751a0c5642127ea8584d454890ff9f3908a38e5595b59f671a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

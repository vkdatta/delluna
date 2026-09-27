export const name="pinboard_unread-fill";
export const id="dl_e72effad11bdc257f3a6";
export const url=new URL("../icons/pinboard_unread-fill.svg?v=32c807df3e5053ced453c6108e3d9995713990bdd174f17f60a320f6fdf844d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

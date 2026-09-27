export const name="fire_extinguisher-fill";
export const id="dl_a23f727379fb79b1b520";
export const url=new URL("../icons/fire_extinguisher-fill.svg?v=4da07b8a944b80aadcd2801c9138563e7417f114b76f0a32be8ad4f73894b91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

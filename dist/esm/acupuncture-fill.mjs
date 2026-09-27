export const name="acupuncture-fill";
export const id="dl_4cffc3d09eae75b78387";
export const url=new URL("../icons/acupuncture-fill.svg?v=460703611f7d3ec2fe86ee5c0c1539bb0f2242d2c04dc40af7f97d4773562e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

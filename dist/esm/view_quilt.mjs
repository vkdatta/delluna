export const name="view_quilt";
export const id="dl_940ceb974e1196b89129";
export const url=new URL("../icons/view_quilt.svg?v=bb2132d534e7889e9a44c73800bb2ba978aa181eaf7c9fda78c97533099d7160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

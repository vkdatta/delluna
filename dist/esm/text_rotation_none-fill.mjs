export const name="text_rotation_none-fill";
export const id="dl_fc16c2b3121732a9b6ba";
export const url=new URL("../icons/text_rotation_none-fill.svg?v=2dee3d90eb5e857b067510e86275303adf141139e28fe8fa1113ab1b7f853c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

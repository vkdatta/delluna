export const name="align_self_stretch-fill";
export const id="dl_28bbd80a264d4f9996bf";
export const url=new URL("../icons/align_self_stretch-fill.svg?v=d920ca9d35875a316ac52c47033c1cb63c8c0a575121f1cb8293128771b3141d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

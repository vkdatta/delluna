export const name="gondola_lift-fill";
export const id="dl_a71f4f5449cf05d87f77";
export const url=new URL("../icons/gondola_lift-fill.svg?v=e2885f42a62ebf3a532cd011c8ec113c79f4babae7dba01be679f76d75cfb147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

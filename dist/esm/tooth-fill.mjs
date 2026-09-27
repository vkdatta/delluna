export const name="tooth-fill";
export const id="dl_90a004610a4efbc5f70c";
export const url=new URL("../icons/tooth-fill.svg?v=bb47c72834f32f69a23cb3deef47e2b47ea835c0269fc02f60e450dd44ae3400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

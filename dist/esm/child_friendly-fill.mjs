export const name="child_friendly-fill";
export const id="dl_894e26ddfbd8b4d81128";
export const url=new URL("../icons/child_friendly-fill.svg?v=104e7c37401b13cb5c1092cf8ba9c08280bcf813668f341c3c202c8c48e99f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

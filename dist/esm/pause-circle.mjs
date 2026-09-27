export const name="pause-circle";
export const id="dl_bbb3ea8dbce84b7b981b";
export const url=new URL("../icons/pause-circle.svg?v=a755e2528d461681614a6a4b182c27ecd19fdd21ab5da62fa0550e15aece2682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="present_to_all";
export const id="dl_722ab42845374151a9e9";
export const url=new URL("../icons/present_to_all.svg?v=991760bb0e96746ecced0990b48a390cf3093af1968f0116f86b99f3e61f79ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="kitchen-fill";
export const id="dl_c63cb42954cb40c4aefd";
export const url=new URL("../icons/kitchen-fill.svg?v=28f5dc2444742cfd5ed83e3793b3e7ba0c658e54436480a4f69ee9ad002995a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

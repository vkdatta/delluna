export const name="view_in_ar-fill";
export const id="dl_9c87ad053e98937c7e82";
export const url=new URL("../icons/view_in_ar-fill.svg?v=e3f5807c9f8729fe8071ee5d6276c35dc8616735980c80781b1ea91295610449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

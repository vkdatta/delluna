export const name="frame-corners-bold";
export const id="dl_8598cf9544534529856b";
export const url=new URL("../icons/frame-corners-bold.svg?v=a145ebe6ed3dee3c468b977070cd5c02a36f70a6c702eca9874ada2ef58554dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

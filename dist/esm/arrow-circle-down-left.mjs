export const name="arrow-circle-down-left";
export const id="dl_3a0bc440acb64d848aec";
export const url=new URL("../icons/arrow-circle-down-left.svg?v=0bc962d0227998f18a4d1edf38c4db4468fa0a83ef96a43bd79d6b3a59efd055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

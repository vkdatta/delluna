export const name="smiley-meh-duotone";
export const id="dl_4757e7af46e7405f9bfd";
export const url=new URL("../icons/S/smiley-meh-duotone.svg?v=505b925a5cc201c864038078e9e1feb8e5b262508f9881c7cbefcac1e9f229bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

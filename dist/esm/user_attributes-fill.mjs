export const name="user_attributes-fill";
export const id="dl_8cf290abb10244d28aa2";
export const url=new URL("../icons/user_attributes-fill.svg?v=3bd85e0b6e45925f5b5815cf7cebc1cd3fb484741016a13fd214f08891de4b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

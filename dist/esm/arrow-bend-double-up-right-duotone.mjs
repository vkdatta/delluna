export const name="arrow-bend-double-up-right-duotone";
export const id="dl_5f3ac37da5f34919ab5d";
export const url=new URL("../icons/arrow-bend-double-up-right-duotone.svg?v=97d33f32621587b1076f776f0beaf569160286e0e7583f9ebfd45f07166123cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

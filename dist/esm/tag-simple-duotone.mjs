export const name="tag-simple-duotone";
export const id="dl_7632c3c822134069b899";
export const url=new URL("../icons/T/tag-simple-duotone.svg?v=62ad8ff203abff36b90e481975b42229b4888080094f345263d61fc944c9fc2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

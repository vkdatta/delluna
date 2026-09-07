export const name="arrow-right-duotone";
export const id="dl_84c73ee271e04b0498fd";
export const url=new URL("../icons/arrow-right-duotone.svg?v=5a480091cae4701fba918894eaa657bcbb3c705d0cb7a0eee954506f09aec11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

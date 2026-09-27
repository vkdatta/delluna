export const name="chef-hat-duotone";
export const id="dl_172bf75fb7944fe0aea5";
export const url=new URL("../icons/chef-hat-duotone.svg?v=01681e3ebeba5323f16b319f2e6eed1f1082fab338860976f5264f0c4de8d35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

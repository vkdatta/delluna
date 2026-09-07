export const name="chef-hat-duotone";
export const id="dl_172bf75fb7944fe0aea5";
export const url=new URL("../icons/chef-hat-duotone.svg?v=972b28ef8c8918ba9b6e67753b9345cb5b49af5896ad62d5cfb4be308d71b9a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

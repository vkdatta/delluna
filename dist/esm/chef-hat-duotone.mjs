export const name="chef-hat-duotone";
export const id="dl_172bf75fb7944fe0aea5";
export const url=new URL("../icons/chef-hat-duotone.svg?v=88a715adc10917db0e7955a00f68fe5806fc3b3e38fe237d288b2dcc61a76ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

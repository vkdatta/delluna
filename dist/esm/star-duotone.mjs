export const name="star-duotone";
export const id="dl_1701ca84dce6b2810173";
export const url=new URL("../icons/star-duotone.svg?v=eec5949bf7d6f33c1ada18ce161648f96efa6680309996c64da0a04c0cad4fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

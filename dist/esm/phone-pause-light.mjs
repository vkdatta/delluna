export const name="phone-pause-light";
export const id="dl_2bc3842932a04ce887de";
export const url=new URL("../icons/phone-pause-light.svg?v=1ab34ebbe295d577a31cf0d85c53f4c06d79a0330bc98287eecdbb8ceced3db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

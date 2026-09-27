export const name="navigation-fill";
export const id="dl_e8fe40558e93d26499ce";
export const url=new URL("../icons/navigation-fill.svg?v=eb68dbfee20002098d768e7a2451ec2aaa931f3f2f8f6b80ad085ce598a8705a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

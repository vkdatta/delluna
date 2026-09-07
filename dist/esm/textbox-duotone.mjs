export const name="textbox-duotone";
export const id="dl_85a29e72861f4f6e952e";
export const url=new URL("../icons/T/textbox-duotone.svg?v=311b96296877f6bab90129130b1969916ec847612d3f010d799a0de6fc4536ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

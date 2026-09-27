export const name="child_care-fill";
export const id="dl_7c4ab2bca4441daa98d5";
export const url=new URL("../icons/child_care-fill.svg?v=b55fb000012445eb74d04e46d28e06218e395dcae3639117e06f1601eb6db3c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

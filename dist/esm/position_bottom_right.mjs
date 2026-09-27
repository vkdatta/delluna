export const name="position_bottom_right";
export const id="dl_95f3206973321f155f84";
export const url=new URL("../icons/position_bottom_right.svg?v=748014d0a47ef4301300ec2fb71f8e58d7f5f1186847f431b0f84e4363d2f153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

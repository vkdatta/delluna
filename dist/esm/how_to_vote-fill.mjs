export const name="how_to_vote-fill";
export const id="dl_1fc7eba88b8440b2a499";
export const url=new URL("../icons/H/how_to_vote-fill.svg?v=c505e188e993f4ec2b38d71a95f7c594e9dc1cb0b0f70b300c5d0b08c7f84bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

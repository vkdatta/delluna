export const name="waving_hand-fill";
export const id="dl_944fd65f5750012392fc";
export const url=new URL("../icons/waving_hand-fill.svg?v=a244325f7c2a1d7c9de7cc6ec2162855b9c708012b25cea2cfd09f6b1fa08707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

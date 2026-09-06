export const name="lock-simple";
export const id="dl_cceb62ba5ba3403d9d5f";
export const url=new URL("../icons/lock-simple.svg?v=b99d3713ac86cb610eb66974d69de2aa1223c4f6387fb1053e3d375e62f5dc1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

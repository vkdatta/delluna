export const name="microphone-bold";
export const id="dl_2585d5535f184c8f9d3d";
export const url=new URL("../icons/microphone-bold.svg?v=b91e6a259882fa5bd818483aa5099d6a2e2d52ef0434b21a282565a63f71348e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

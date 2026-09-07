export const name="sparkle-duotone";
export const id="dl_26012581eef645898dca";
export const url=new URL("../icons/S/sparkle-duotone.svg?v=c4740b4365131487e4b49b54fc554a6cbdde28aaad74c5a8a8be2195b5fb4c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

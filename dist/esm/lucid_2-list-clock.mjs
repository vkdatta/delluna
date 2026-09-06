export const name="lucid_2-list-clock";
export const id="dl_4b2004de5daa4a82834e";
export const url=new URL("../icons/lucid_2-list-clock.svg?v=aabc6bd98ce55644ecdea39ac49dc16c2515fe69bc7055583f420fccf95735bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

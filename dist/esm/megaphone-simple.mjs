export const name="megaphone-simple";
export const id="dl_a95ab245521345a482c4";
export const url=new URL("../icons/megaphone-simple.svg?v=67831a1898c111f44e84c947f6aa414a8a0b1de844803677f4189068488d41b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

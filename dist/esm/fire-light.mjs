export const name="fire-light";
export const id="dl_7af18bcb2ad749af86b1";
export const url=new URL("../icons/fire-light.svg?v=c447abf9df937129e65bddcc566f0e4d67b3b2c5d84dda6af5790a9ae44179c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

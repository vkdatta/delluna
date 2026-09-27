export const name="sigma-light";
export const id="dl_af76b5dbcdc2a981909a";
export const url=new URL("../icons/sigma-light.svg?v=6e79495bdac3e931e2ab93ae3a45beb9beda9c25dc36bd8bbde4bf266f037a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

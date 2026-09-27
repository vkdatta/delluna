export const name="git-pull-request-duotone";
export const id="dl_662c8819d4d04b55849a";
export const url=new URL("../icons/git-pull-request-duotone.svg?v=055cf65f2f67a53cfd3b2d18eb4b4925e62c82251a91ae56b24792ecc16abeed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

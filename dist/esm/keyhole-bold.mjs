export const name="keyhole-bold";
export const id="dl_0b6eb9ddc45047adac4c";
export const url=new URL("../icons/keyhole-bold.svg?v=472be387e5697b1de9f078ca8bec8e4f4b6c125b9bb978fd4990c2d06a49ee50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

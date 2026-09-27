export const name="toll-fill";
export const id="dl_0c33a936ea497bd73c10";
export const url=new URL("../icons/toll-fill.svg?v=3245199e84c54cb530fd5b7366514606ecc3c9129d964d62e04957f1b8b05d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bus-duotone";
export const id="dl_7325b5fd37c54bd7ac89";
export const url=new URL("../icons/bus-duotone.svg?v=a899b409e2d843bd548f3b6b9854517f8189ae031b8c52f4a1660aa555fffca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

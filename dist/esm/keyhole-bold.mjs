export const name="keyhole-bold";
export const id="dl_0b6eb9ddc45047adac4c";
export const url=new URL("../icons/keyhole-bold.svg?v=77f27d145600ba7474d427dd46ffa073bfea3206fa4689a351569690956edae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

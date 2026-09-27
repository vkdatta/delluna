export const name="flex_direction";
export const id="dl_b1b8ea26abe0555a09a2";
export const url=new URL("../icons/flex_direction.svg?v=f4c9b5c803242491332e5e1f43c6ad4d94813e6dfd62be2d3c08ade21f17a4d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

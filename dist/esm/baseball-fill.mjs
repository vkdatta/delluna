export const name="baseball-fill";
export const id="dl_7f71bb70666e46129d5e";
export const url=new URL("../icons/baseball-fill.svg?v=6ec0b676cbb3ad55748020000af4913a9b26013ee36b5b98242802a588594f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

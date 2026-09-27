export const name="boxing-glove-bold";
export const id="dl_33f059911e5c4d02b821";
export const url=new URL("../icons/boxing-glove-bold.svg?v=5c74ecbd394e09e338cc936d287dc0f1bcd130ca39f9a72b489ca2978e4524ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

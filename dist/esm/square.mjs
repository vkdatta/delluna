export const name="square";
export const id="dl_6b6e0fc0fe30401a8b53";
export const url=new URL("../icons/square.svg?v=0702a8b124006685ae3b486f0716f457f00ac5136e8761f469af4e1cc424d75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

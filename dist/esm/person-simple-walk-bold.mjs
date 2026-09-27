export const name="person-simple-walk-bold";
export const id="dl_48003e3c17034db99cde";
export const url=new URL("../icons/person-simple-walk-bold.svg?v=fdae790b0216b3366e4c7d5c6c21bbb54dbae496beb1b751100c487eefa6850a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

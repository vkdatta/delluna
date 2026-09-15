export const name="explosion-fill";
export const id="dl_c2147555ad6f454dac40";
export const url=new URL("../icons/E/explosion-fill.svg?v=053814ce4d68735c6bd1c4630d487d2fff97e36b84370666c22d5de7921b2658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

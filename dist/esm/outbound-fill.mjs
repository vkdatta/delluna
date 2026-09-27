export const name="outbound-fill";
export const id="dl_7af36fb7822c0a7d4d06";
export const url=new URL("../icons/outbound-fill.svg?v=0082eee09c9db7ec58693ee67560e0d9866610b95a858b67c5de67191c6ae948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

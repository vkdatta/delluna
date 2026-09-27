export const name="train-front-tunnel";
export const id="dl_a82ade1d1cba49edaa76";
export const url=new URL("../icons/train-front-tunnel.svg?v=5daccd1e00c29a5b4129d81406e60b28ba379dfd676d0fcf47f6aaccfdeabcf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

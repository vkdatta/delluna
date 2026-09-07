export const name="train-front-tunnel";
export const id="dl_a82ade1d1cba49edaa76";
export const url=new URL("../icons/train-front-tunnel.svg?v=9c2ce448195dc4132ddcb3317b6db6fcc9f2e883855a8c6d6883ee0a59968564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

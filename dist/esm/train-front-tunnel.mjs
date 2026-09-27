export const name="train-front-tunnel";
export const id="dl_a82ade1d1cba49edaa76";
export const url=new URL("../icons/train-front-tunnel.svg?v=0e6d7f109cbdea1df8038aa4f6c068c19f84063752bb7310bab52a023cbb0b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

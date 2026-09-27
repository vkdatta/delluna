export const name="shooting-star";
export const id="dl_750faa94d97a5f2e1c42";
export const url=new URL("../icons/shooting-star.svg?v=0b89548d1ea9d1a0b1ef699ac0a6f59af7dba0955e7fb663d71c6db3a062a35f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

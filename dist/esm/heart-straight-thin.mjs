export const name="heart-straight-thin";
export const id="dl_bcb1d89facce42968a65";
export const url=new URL("../icons/heart-straight-thin.svg?v=798b95321b017dbe1f417d594b4a6d207782edc83cf2d42b8e26cfac2c4481f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

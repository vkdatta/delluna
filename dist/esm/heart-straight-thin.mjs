export const name="heart-straight-thin";
export const id="dl_bcb1d89facce42968a65";
export const url=new URL("../icons/heart-straight-thin.svg?v=b0c6775264e0564802bace3e3b13a6e09da6e5e5c4ff4ed25f9ca1a48e286512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

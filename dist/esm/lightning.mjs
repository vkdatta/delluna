export const name="lightning";
export const id="dl_b262026c923a42299e0b";
export const url=new URL("../icons/lightning.svg?v=3a50c776266b21812f8ec5b5a841a81f54aa942569a31eb03a36fb0a5bfbe66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

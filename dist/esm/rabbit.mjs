export const name="rabbit";
export const id="dl_dcaea3bce9054f5bb3ad";
export const url=new URL("../icons/rabbit.svg?v=7478f40525b31c63c64b92737d3442cece59a5bbde951245d66750d399cbe8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

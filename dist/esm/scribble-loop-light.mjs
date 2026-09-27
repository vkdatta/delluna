export const name="scribble-loop-light";
export const id="dl_e75ad8545ad134221b5b";
export const url=new URL("../icons/scribble-loop-light.svg?v=45d081a9fed73864a79a71459fa2d66bf598b28f67194f064fa073a8b3cb2beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

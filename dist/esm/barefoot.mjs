export const name="barefoot";
export const id="dl_807d530276b2181c7d19";
export const url=new URL("../icons/barefoot.svg?v=c7f31a9985aea4457a2c7527140d50760e135413da3d29cb6f51bc80171fab98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

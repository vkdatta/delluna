export const name="hand-tap";
export const id="dl_5a63b5946202445f9e1c";
export const url=new URL("../icons/hand-tap.svg?v=e6b3393b4813c234c386bfaa0304011059fa6196b94a5461afe35e5b9b2df180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

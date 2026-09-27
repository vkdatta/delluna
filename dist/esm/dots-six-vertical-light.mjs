export const name="dots-six-vertical-light";
export const id="dl_bddbd5a22ca241cd8784";
export const url=new URL("../icons/dots-six-vertical-light.svg?v=058553290b68c8e9e103daf4c94a40d6e9edcc7716ebd4332215bcbec24e9b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

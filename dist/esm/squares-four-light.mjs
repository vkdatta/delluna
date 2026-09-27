export const name="squares-four-light";
export const id="dl_5b2ad8e58808e2a7c2fd";
export const url=new URL("../icons/squares-four-light.svg?v=9878e96b0373c4d4c6f051e21cebffcc7904ab91bf0b081d69ab20390622f5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

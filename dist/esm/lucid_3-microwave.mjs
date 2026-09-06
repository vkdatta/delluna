export const name="lucid_3-microwave";
export const id="dl_fb9ae321575142fc9066";
export const url=new URL("../icons/lucid_3-microwave.svg?v=bcf0a6c2bc93231664e238c4dca4686c710e62e61b17468e275b6a9c45f59d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

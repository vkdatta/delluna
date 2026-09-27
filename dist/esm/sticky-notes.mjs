export const name="sticky-notes";
export const id="dl_5682c307aa9244de81b6";
export const url=new URL("../icons/sticky-notes.svg?v=bd3776a2a52b6f1c12cb25bb990134858a834544fb3826477ab99e9c626e286d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

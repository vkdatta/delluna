export const name="vignette-fill";
export const id="dl_4f0c5dbe776fcc7b960f";
export const url=new URL("../icons/vignette-fill.svg?v=056924d313a62698251bbe5a15d6a4674d4ec64bba23fe3ef27f8e5f6dae4b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

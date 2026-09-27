export const name="mood_heart-fill";
export const id="dl_d0eb674eb362e61cf204";
export const url=new URL("../icons/mood_heart-fill.svg?v=516d6b4dd71ec11fd8c1ef159151ba00f358d2b5fed3eae73f24792cecb40212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

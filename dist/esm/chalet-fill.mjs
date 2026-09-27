export const name="chalet-fill";
export const id="dl_5433716407523d7a7288";
export const url=new URL("../icons/chalet-fill.svg?v=02736803d127477265183af449e45f63acf8e72380a49df5b08be5ab84f2a113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

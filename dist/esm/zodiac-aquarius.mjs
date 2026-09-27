export const name="zodiac-aquarius";
export const id="dl_8c365caf4dc34a92b568";
export const url=new URL("../icons/zodiac-aquarius.svg?v=62a6d3894c9702342f04d91c2569e59a58dfc04f9475b595ae299c3a161c9a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

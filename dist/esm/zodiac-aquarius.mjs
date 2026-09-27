export const name="zodiac-aquarius";
export const id="dl_8c365caf4dc34a92b568";
export const url=new URL("../icons/zodiac-aquarius.svg?v=896b8f3aa0e13a1bb1f3fdd6232a5470ac56cc1967eeb36ab310aa7fbf872275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

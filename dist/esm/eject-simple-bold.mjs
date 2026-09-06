export const name="eject-simple-bold";
export const id="dl_da13cd6d571949b99911";
export const url=new URL("../icons/eject-simple-bold.svg?v=cb289d4973fdae968cd1485eac7f32416a854544867efd0fb0fdaa70a2f90e0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

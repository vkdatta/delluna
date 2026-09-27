export const name="cards-fill";
export const id="dl_46bbc2d577914274a0d2";
export const url=new URL("../icons/cards-fill.svg?v=85553102d0c0b864f319bb22e6ae37b7055d6b834c8c6c7e139c730377bc92ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

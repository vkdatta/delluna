export const name="shuffle-simple-bold";
export const id="dl_f9879fa2075d4b1fb9d7";
export const url=new URL("../icons/S/shuffle-simple-bold.svg?v=2f25fdac7ac2856d5d055f33ddc2a2975712123ec47e5e100352b2a8955d8c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

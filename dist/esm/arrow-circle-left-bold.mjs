export const name="arrow-circle-left-bold";
export const id="dl_387568d167074018a82d";
export const url=new URL("../icons/arrow-circle-left-bold.svg?v=9cf3cc9a3982ca9c34fa3bad4a6a2640e7a8cb2ef6eae33a0c19edb95a7f137f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

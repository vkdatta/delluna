export const name="number-seven-duotone";
export const id="dl_8d1a62b5d5f3450b8312";
export const url=new URL("../icons/number-seven-duotone.svg?v=a26afc6a8f1b7f052e4567ad3a7ede885e08e5a29fc317a062d3c97a3262ef6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

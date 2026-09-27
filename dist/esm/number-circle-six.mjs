export const name="number-circle-six";
export const id="dl_d4dc7715914b4a25b192";
export const url=new URL("../icons/number-circle-six.svg?v=494f473b8e0d546e34a5b9d2028be616ce91716893dc7e7a275cd40dd42cff09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

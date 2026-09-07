export const name="box-arrow-down";
export const id="dl_b17d2dd5f4114a618cb9";
export const url=new URL("../icons/box-arrow-down.svg?v=30c42ecc515249a377ce255479635aa3bff37449ad70460adbec204fdf6264c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

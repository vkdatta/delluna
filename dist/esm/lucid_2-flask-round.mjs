export const name="lucid_2-flask-round";
export const id="dl_2d69895fa12043a0aa13";
export const url=new URL("../icons/lucid_2-flask-round.svg?v=7f5db5fcc3ef4f4d2b121cd88c27ea4ea6171b4e0d1f2279e8da9b334dc0587b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

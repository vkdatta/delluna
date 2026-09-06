export const name="money-bold";
export const id="dl_443fdf7d6b61407c9324";
export const url=new URL("../icons/money-bold.svg?v=c73af9fed38105606242dc4c590c41390c6e77006e9722c9d9bb213fe886db59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

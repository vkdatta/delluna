export const name="card_membership";
export const id="dl_f2963b0fa57755da17d8";
export const url=new URL("../icons/card_membership.svg?v=fed6822c3748dfefcab86b30c9b7144afa53bcebe6d0864dd753b6f4142959f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

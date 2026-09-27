export const name="lucid_2-lens-concave";
export const id="dl_63295e824dd24597bafb";
export const url=new URL("../icons/lucid_2-lens-concave.svg?v=8b0b19e8889e5b88bd1f4c0a330529eefae1fcf1dfd76e930cb3a022f433bc93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

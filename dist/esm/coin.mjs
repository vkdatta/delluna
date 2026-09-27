export const name="coin";
export const id="dl_b8b61cc8309f447ba3a3";
export const url=new URL("../icons/coin.svg?v=def500052f80317e396c3e294441e54225c05781540241c54cc61380c5cc8ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

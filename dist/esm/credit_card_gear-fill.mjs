export const name="credit_card_gear-fill";
export const id="dl_e91e98fb789991bc1721";
export const url=new URL("../icons/credit_card_gear-fill.svg?v=401ab971bcc2f543dd09c9b1b607633ecad08baf5a05c9a6b700a38de9d076cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

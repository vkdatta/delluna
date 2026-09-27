export const name="film-script-fill";
export const id="dl_7569b59a0ed3472c909b";
export const url=new URL("../icons/film-script-fill.svg?v=9dabcbcfe046c0d09b3c648a109c7a9b8ba835ecc5d69af24f4615f94a047a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

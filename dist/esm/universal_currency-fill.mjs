export const name="universal_currency-fill";
export const id="dl_5bed33401d95fcbba083";
export const url=new URL("../icons/universal_currency-fill.svg?v=6d73daacf9bb9775763d8200b7216719894d941bb66002ead4c9c1f29596716e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

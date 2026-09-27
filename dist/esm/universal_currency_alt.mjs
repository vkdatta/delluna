export const name="universal_currency_alt";
export const id="dl_4376267c10070055f94b";
export const url=new URL("../icons/universal_currency_alt.svg?v=0c38723f449d2bafa74daf8768aa48bfb539b0ad29b6315837de639855506ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

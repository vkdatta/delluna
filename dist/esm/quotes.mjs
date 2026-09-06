export const name="quotes";
export const id="dl_f11464280c7b48eeac5a";
export const url=new URL("../icons/quotes.svg?v=e6afaa07d488b94413b5edbbe813d45fa8db5b6c9269a4de3b20bdae77d8a142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

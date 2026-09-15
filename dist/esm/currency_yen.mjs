export const name="currency_yen";
export const id="dl_9cbe1f09bfa745cbb81a";
export const url=new URL("../icons/C/currency_yen.svg?v=09a8d6571bf9a2702ab547031a77188d6fb47142f63a667602489fa8b3e59762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

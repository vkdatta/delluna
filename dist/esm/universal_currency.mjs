export const name="universal_currency";
export const id="dl_a34780dcd64a4f71df4d";
export const url=new URL("../icons/universal_currency.svg?v=68af3be2253093f66e5f2e58db5adb2cc51010d9e5bdc29869d4659570b28c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

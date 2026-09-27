export const name="special_character-fill";
export const id="dl_4b2a9259d2fa6673964e";
export const url=new URL("../icons/special_character-fill.svg?v=33610e9c0f17c6b2cae0e45f23973397eaec0f4ec70c3caf56d4bcd1248d1ca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

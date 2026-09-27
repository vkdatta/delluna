export const name="lock-key-light";
export const id="dl_c5c5f321af4a46a1bbb1";
export const url=new URL("../icons/lock-key-light.svg?v=af71c929470e1c33456c310da62deac4fbcc9a773209c6ba78446a1916032b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

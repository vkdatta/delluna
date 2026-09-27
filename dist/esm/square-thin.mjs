export const name="square-thin";
export const id="dl_49f3c383f905a26da6fb";
export const url=new URL("../icons/square-thin.svg?v=7e7bace0b764a432a51dbd0b04f82a7e16887423489edaa87a21d11681b13eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="speaker-x-bold";
export const id="dl_b8f47711106e49cd43fd";
export const url=new URL("../icons/speaker-x-bold.svg?v=aa27891cead00f2cd1e4f288ea7ac9aaada99fb02ab3e909fd39665fa3ea8f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

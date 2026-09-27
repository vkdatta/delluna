export const name="text-superscript";
export const id="dl_a96f8645690db41fffbb";
export const url=new URL("../icons/text-superscript.svg?v=c60638b86bacb2a4b7cf42033a50e96cd28e9a3ccdffae99081b65d0ac2c7468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

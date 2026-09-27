export const name="umbrella-simple-duotone";
export const id="dl_f82523adcef40e6f5187";
export const url=new URL("../icons/umbrella-simple-duotone.svg?v=3e9cc52e240cd6d57b6621303797c00ab045280995808b376b15226c431806f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

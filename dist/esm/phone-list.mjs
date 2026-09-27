export const name="phone-list";
export const id="dl_4f0b958c6e9d4d739178";
export const url=new URL("../icons/phone-list.svg?v=3c1d90c39de5633be3e5019cfae3c3a901568daa250b5b3f0fe6647f47125156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

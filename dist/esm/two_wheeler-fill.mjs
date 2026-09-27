export const name="two_wheeler-fill";
export const id="dl_7bdc6523016ae9d5a596";
export const url=new URL("../icons/two_wheeler-fill.svg?v=cd86b12ec473ef82e86d352019d9d243693263a214ca6258b3c3116d2aea8edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

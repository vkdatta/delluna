export const name="letter-circle-v";
export const id="dl_28e70ac6a1b54068a49b";
export const url=new URL("../icons/letter-circle-v.svg?v=ee1de4189ff2ef218a59798c742fd151ad0eb943b499a9de070a64634dd78231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

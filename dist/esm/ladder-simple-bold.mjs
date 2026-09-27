export const name="ladder-simple-bold";
export const id="dl_b7eb0afb4dc9473ab7c6";
export const url=new URL("../icons/ladder-simple-bold.svg?v=bd644f1e8b757136cec11d8b61570bfd489c708ccee816519f296fb8713fb51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

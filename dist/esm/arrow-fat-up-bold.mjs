export const name="arrow-fat-up-bold";
export const id="dl_8a2b33506c444268b0b7";
export const url=new URL("../icons/arrow-fat-up-bold.svg?v=a23d189e6502d78f4f8eead3cbace90d9594c3357ce52c4ca35bf72cb2bb8b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

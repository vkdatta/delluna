export const name="unite-light";
export const id="dl_796768517ebe4b96f0aa";
export const url=new URL("../icons/unite-light.svg?v=9febcd01ee58ed5d933044be2fff592b56fa819e0a4ba4635ddff3934cc74238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

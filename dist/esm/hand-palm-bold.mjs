export const name="hand-palm-bold";
export const id="dl_44403990bad441078b10";
export const url=new URL("../icons/hand-palm-bold.svg?v=82883a3dd8e7703d1b3855b12df90d03a241bbc979159399335a2f281f96062f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

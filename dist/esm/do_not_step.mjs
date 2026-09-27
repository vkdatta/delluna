export const name="do_not_step";
export const id="dl_a0c11251deaa0b5749d4";
export const url=new URL("../icons/do_not_step.svg?v=e689735d99dcedf82345933ac94205b57442833ae041b39589829f0bfb3450d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

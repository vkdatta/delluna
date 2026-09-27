export const name="toilet-paper-light";
export const id="dl_59a6028ce74acb9d6eeb";
export const url=new URL("../icons/toilet-paper-light.svg?v=9ed109fc6eaf22dc3b6550e571ab1eea3e0950bbf8e2d6496ad324f2f7364007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

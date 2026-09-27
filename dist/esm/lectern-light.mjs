export const name="lectern-light";
export const id="dl_bf790041be984092a50f";
export const url=new URL("../icons/lectern-light.svg?v=7f0623f3cd05797460f066970e9bd56601aa84e1033ec37991769fffa0035ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

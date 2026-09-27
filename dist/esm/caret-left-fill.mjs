export const name="caret-left-fill";
export const id="dl_3f65dc82792f454493fb";
export const url=new URL("../icons/caret-left-fill.svg?v=acc040df3aefa534596bf3aabde0cd665a05c1804b7963a6f9990d24dbd5f151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

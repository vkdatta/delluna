export const name="lucid_2-hand-fist";
export const id="dl_76c96203e09e4217a22a";
export const url=new URL("../icons/lucid_2-hand-fist.svg?v=9129949f2a63e197e1a49febab6738564c16629df244252e306ed54f382beff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="plus-light";
export const id="dl_af84aa528600460e893e";
export const url=new URL("../icons/plus-light.svg?v=b904e6619783c0f1f3733f517095fbae634f923aaa7fda36ffc76c5a9e671496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

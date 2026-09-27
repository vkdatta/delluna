export const name="caret-line-down-fill";
export const id="dl_5b8613dc9c924cde88d5";
export const url=new URL("../icons/caret-line-down-fill.svg?v=28ec76d6af78ae6f5252248cddc7efddd5b69dc2012f522b1e854019168face4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
